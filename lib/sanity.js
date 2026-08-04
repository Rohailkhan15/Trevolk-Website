import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,    // replace with your actual project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true
})

export const projectsQuery = `*[_type == "project"]{
  title,
  description,
  githubLink,
  liveLink,
  techStack
}`