import consola from 'consola';
import axios from 'axios';
import { db } from '@/utils/db';
import { locations } from '@/schema/location';

export async function getCoordsForAddress(req: any, res: any) {
  const { address } = req.body || {}; // Extract address from the request body
  //   const coords = {
  //     lat: 40.7484474,
  //     lng: -73.9871516,
  //   };
  const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:148102&key=YOUR_API_KEY`);
  const data = await response?.data;
  const coords = data?.results[0].geometry?.location;
  const result = data?.results[0]; // Assuming the first result
  const dataToSave = {
    formattedAddress: result.formatted_address,
    latitude: result.geometry.location.lat,
    longitude: result.geometry.location.lng,
    placeId: result.place_id,
    addressComponents: result.address_components,
    viewport: result.geometry.viewport,
  };
  const [newLocation] = await db
    .insert(locations)
    .values({
      formattedAddress: dataToSave.formattedAddress,
      latitude: dataToSave.latitude,
      longitude: dataToSave.longitude,
      placeId: dataToSave.placeId,
      addressComponents: dataToSave.addressComponents,
      viewport: dataToSave.viewport,
    })
    .returning({
      id: locations.id,
      formattedAddress: locations.formattedAddress,
      latitude: locations.latitude,
      longitude: locations.longitude,
    });
  // Send back the response
  res.json({ newLocation });
  // res.json({ address, coords });
}
