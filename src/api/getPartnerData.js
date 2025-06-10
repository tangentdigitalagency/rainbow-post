import supabase from '../util/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the form data from the request body
    const formData = req.body;

    // Add additional metadata
    const enrichedData = {
      ...formData,
      ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
      sourceUrl: req.headers['referer'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastCompletedStep: '/profile',
    };

    // Insert the data into Supabase
    const { data, error } = await supabase
      .from('formSubmissions')
      .insert([enrichedData])
      .select('uuid')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save form data' });
    }

    // Construct the URL with the UUID
    const baseUrl = 'auto.rainbowinsurance.com/profile';
    const formUrl = `${baseUrl}/uuid=${data.uuid}`;

    // Return the UUID and URL
    return res.status(200).json({
      code: 200,
      status: 'success',
      data: {
        uuid: data.uuid,
        redirectUrl: formUrl
      },
      message: 'Form submission successful'
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
