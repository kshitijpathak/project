/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text) - The title of the blog post
      - `slug` (text, unique) - URL-friendly version of the title
      - `excerpt` (text) - Short preview/introduction of the blog post
      - `content` (text) - Full blog post content
      - `image_url` (text) - URL to the featured image
      - `author` (text) - Name of the blog post author
      - `reading_time` (integer) - Estimated reading time in minutes
      - `published` (boolean) - Whether the post is published or draft
      - `published_at` (timestamp) - When the post was published
      - `created_at` (timestamp) - When the post was created
      - `updated_at` (timestamp) - When the post was last updated

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts only
    - Only authenticated users can create/update/delete posts

  3. Indexes
    - Index on `slug` for fast lookups
    - Index on `published_at` for sorting
    - Index on `published` for filtering
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text NOT NULL,
  author text NOT NULL DEFAULT 'Grey2Green Team',
  reading_time integer NOT NULL DEFAULT 5,
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
