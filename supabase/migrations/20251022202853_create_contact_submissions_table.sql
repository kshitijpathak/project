/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Full name of the person contacting
      - `email` (text) - Email address for contact
      - `subject` (text) - Subject of the inquiry
      - `message` (text) - Message content
      - `inquiry_type` (text) - Type of inquiry: 'local_project' or 'partnership'
      - `created_at` (timestamptz) - Timestamp when the submission was created
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anyone to insert contact submissions (public form)
    - Add policy for authenticated users to read all contact submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  inquiry_type text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);