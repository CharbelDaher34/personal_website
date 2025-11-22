export const aboutQuery = `*[_type == "about"][0]`;
export const experienceQuery = `*[_type == "experience"] | order(start_date desc)`;
export const educationQuery = `*[_type == "education"] | order(start_date desc)`;
export const projectsQuery = `*[_type == "project"] | order(featured desc)`;
export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]`;
export const servicesQuery = `*[_type == "service"]`;
