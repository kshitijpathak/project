/*
  # Create volunteers table

  1. New Tables
    - `volunteers`
      - `id` (uuid, primary key) - Unique identifier for each volunteer submission
      - `name` (text) - Full name of the volunteer
      - `email` (text) - Email address for contact
      - `phone` (text) - Optional phone number
      - `interests` (text) - Areas of interest for volunteering
      - `message` (text) - Personal message from the volunteer
      - `created_at` (timestamptz) - Timestamp when the submission was created
  
  2. Security
    - Enable RLS on `volunteers` table
    - Add policy for anyone to insert volunteer submissions (public form)
    - Add policy for authenticated users to read all volunteer submissions
*/

CREATE TABLE IF NOT EXISTS volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  interests text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit volunteer form"
  ON volunteers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON volunteers
  FOR SELECT
  TO authenticated
  USING (true);
