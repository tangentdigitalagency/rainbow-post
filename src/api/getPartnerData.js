const supabase = require('../util/supabase');

async function handler(req, res) {
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
      .select('uuid, userId')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save form data' });
    }

    // Construct the URL with the userId
    const baseUrl = 'auto.rainbowinsurance.com/profile';
    const formUrl = `${baseUrl}?userId=${data.userId}`;

    // Return the userId and URL
    return res.status(200).json({
      code: 200,
      status: 'success',
      data: {
        userId: data.userId,
        redirectUrl: formUrl
      },
      message: 'Form submission successful',
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = handler;
