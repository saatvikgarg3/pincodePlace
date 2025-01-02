import { jsonb, numeric, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const locations = pgTable('locations', {
  id: serial('id').primaryKey(),
  formattedAddress: text('formatted_address'),
  latitude: numeric('latitude'),
  longitude: numeric('longitude'),
  placeId: text('place_id'),
  addressComponents: jsonb('address_components'),
  viewport: jsonb('viewport'),
});
