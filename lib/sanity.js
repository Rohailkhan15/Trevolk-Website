import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,    // replace with your actual project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true
})

export const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  title,
  description,
  githubLink,
  liveLink,
  techStack
}`

export const featuredProjectsQuery = `*[_type == "project"] | order(_createdAt desc) [0...2] {
  title,
  description,
  githubLink,
  liveLink,
  techStack
}`

export const servicesQuery = `*[_type == "service"] | order(_createdAt desc) {
  name,
  description,
  keywords,
  featuredOnHomePage
}`

export const featuredServicesQuery = `*[_type == "service" && featuredOnHomePage == true] | order(_createdAt desc) [0...2] {
  name,
  description,
  keywords
}`
