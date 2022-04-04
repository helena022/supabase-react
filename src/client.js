import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  "https://hfuuuxzvmwyxgipcogny.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmdXV1eHp2bXd5eGdpcGNvZ255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg4MjI5NDYsImV4cCI6MTk2NDM5ODk0Nn0.jjmwGdNFiM6FYz7Guxb1bLj9ipZPOh4wRkUTn86GXn0"
)
