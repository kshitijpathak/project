/*
  # Add skills and location fields to volunteers table

  1. Changes
    - Add `skills` column to volunteers table (text)
    - Add `location` column to volunteers table (text)
  
  2. Details
    - Skills field will store volunteer capabilities and expertise
    - Location field will store volunteer's geographic location
    - Both fields are optional with empty string defaults
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'volunteers' AND column_name = 'skills'
  ) THEN
    ALTER TABLE volunteers ADD COLUMN skills text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'volunteers' AND column_name = 'location'
  ) THEN
    ALTER TABLE volunteers ADD COLUMN location text DEFAULT '';
  END IF;
END $$;