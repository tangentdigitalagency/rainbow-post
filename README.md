# Form Submission API

This API handles form submissions for insurance applications, storing data in Supabase and returning a unique identifier and redirect URL.

## API Endpoint

```
POST https://rainbow-posting.onrender.com/api/submit
```

## Request Format

Send a POST request with JSON data in the request body.

### Headers

```
Content-Type: application/json
```

### Example Request

```bash
curl -X POST https://rainbow-posting.onrender.com/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }'
```

## Available Parameters

All parameters are optional. The API will accept any combination of the following fields:

### Personal Information

| Parameter | Type    | Description       |
| --------- | ------- | ----------------- |
| firstName | string  | First name        |
| lastName  | string  | Last name         |
| phone     | string  | Phone number      |
| email     | string  | Email address     |
| address1  | string  | Primary address   |
| address2  | string  | Secondary address |
| city      | string  | City              |
| state     | string  | State             |
| zipcode   | integer | ZIP code          |

### Driver One Information

| Parameter                | Type   | Description                |
| ------------------------ | ------ | -------------------------- |
| driverOneFirstName       | string | First name                 |
| driverOneLastName        | string | Last name                  |
| driverOneDOB             | date   | Date of birth (MM-DD-YYYY) |
| driverOneGender          | string | Gender                     |
| driverOneResidence       | string | Residence type             |
| driverOneYearAtResidence | string | Years at current residence |
| driverOneCredit          | string | Credit rating              |
| driverOneRelationship    | string | Relationship to primary    |
| driverOneMaritalStatus   | string | Marital status             |
| driverOneOccupation      | string | Occupation                 |
| driverOneAgedLicensed    | string | Age when licensed          |
| driverOneLicenseState    | string | License state              |
| driverOneLicenseStatus   | string | License status             |
| driverOneSuspended       | string | License suspension status  |
| driverOneFilingRequired  | string | Filing requirements        |
| driverOneDUI             | string | DUI status                 |
| driverOneDUIDate         | date   | DUI date (MM-DD-YYYY)      |
| driverOneDUIState        | string | State where DUI occurred   |

### Driver Two Information

| Parameter                | Type   | Description                |
| ------------------------ | ------ | -------------------------- |
| driverTwoFirstName       | string | First name                 |
| driverTwoLastName        | string | Last name                  |
| driverTwoDOB             | date   | Date of birth (MM-DD-YYYY) |
| driverTwoGender          | string | Gender                     |
| driverTwoResidence       | string | Residence type             |
| driverTwoYearAtResidence | string | Years at current residence |
| driverTwoCredit          | string | Credit rating              |
| driverTwoRelationship    | string | Relationship to primary    |
| driverTwoMaritalStatus   | string | Marital status             |
| driverTwoOccupation      | string | Occupation                 |
| driverTwoAgedLicensed    | string | Age when licensed          |
| driverTwoLicenseState    | string | License state              |
| driverTwoLicenseStatus   | string | License status             |
| driverTwoSuspended       | string | License suspension status  |
| driverTwoFilingRequired  | string | Filing requirements        |
| driverTwoDUI             | string | DUI status                 |
| driverTwoDUIDate         | date   | DUI date (MM-DD-YYYY)      |
| driverTwoDUIState        | string | State where DUI occurred   |

### Vehicle One Information

| Parameter                | Type   | Description            |
| ------------------------ | ------ | ---------------------- |
| vehicleOneYear           | string | Vehicle year           |
| vehicleOneMake           | string | Vehicle make           |
| vehicleOneModel          | string | Vehicle model          |
| vehicleOneTrim           | string | Vehicle trim           |
| vehicleOneOwnership      | string | Ownership status       |
| vehicleOnePrimaryUsage   | string | Primary usage          |
| vehicleOneOneWayDistance | string | One-way distance       |
| vehicleOneAnnualMiles    | string | Annual miles           |
| vehicleOneStorage        | string | Storage location       |
| vehicleOneComprehensive  | string | Comprehensive coverage |
| vehicleOneCollision      | string | Collision coverage     |
| vehicleOneSecurity       | string | Security features      |

### Vehicle Two Information

| Parameter                | Type   | Description            |
| ------------------------ | ------ | ---------------------- |
| vehicleTwoYear           | string | Vehicle year           |
| vehicleTwoMake           | string | Vehicle make           |
| vehicleTwoModel          | string | Vehicle model          |
| vehicleTwoTrim           | string | Vehicle trim           |
| vehicleTwoOwnership      | string | Ownership status       |
| vehicleTwoPrimaryUsage   | string | Primary usage          |
| vehicleTwoOneWayDistance | string | One-way distance       |
| vehicleTwoAnnualMiles    | string | Annual miles           |
| vehicleTwoStorage        | string | Storage location       |
| vehicleTwoComprehensive  | string | Comprehensive coverage |
| vehicleTwoCollision      | string | Collision coverage     |

### Insurance Information

| Parameter             | Type   | Description                |
| --------------------- | ------ | -------------------------- |
| currentlyInsured      | string | Current insurance status   |
| currentProvider       | string | Current insurance provider |
| bodily                | string | Bodily injury coverage     |
| property              | string | Property damage coverage   |
| requestedCoverageType | string | Requested coverage type    |
| vehicleOneComprehensive | string | 
| vehicleOneCollision | string |

### Additional Fields

| Parameter         | Type    | Description             |
| ----------------- | ------- | ----------------------- |
| additionalDrivers | boolean | Additional drivers flag |
| tcpa              | string  | TCPA consent            |
| tcpaText          | string  | TCPA consent text       |
| subId             | string  | Submission ID           |

## Response Format

### Success Response (200)

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "uuid": "{{uuid}}",
    "redirectUrl": "auto.rainbowinsurance.com/profile?uuid={{uuid}}"
  },
  "message": "Form submission successful"
}
```

### Error Response (500)

```json
{
  "code": 500,
  "status": "error",
  "message": "Failed to save form data"
}
```

## Notes

- All fields are optional
- Dates should be in MM-DD-YYYY format
- The API automatically adds metadata including:
  - IP address
  - User agent
  - Source URL
  - Creation timestamp
  - Update timestamp

# rainbow-post
