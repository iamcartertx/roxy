require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // service role needed for memory access
)

async function getOrCreateProject() {
  const { data: existing } = await supabase
    .from('projects')
    .select('*')
    .eq('name', 'Roxy Dev Stack')
    .maybeSingle()

  if (existing) return existing

  const { data, error } = await supabase
    .from('projects')
    .insert([
      {
        name: 'Roxy Dev Stack',
        description: 'Core tooling and automation setup for the Roxy developer assistant',
        status: 'active'
      }
    ])
    .select()
    .single()

  if (error) throw new Error(error.message)
  return data
}

async function saveMemory({ topic, content, tags, project_id }) {
  const { data, error } = await supabase
    .from('memory')
    .insert([{ topic, content, tags, project_id }])
    .select()
    .single()

  if (error) {
    console.error('❌ Memory insert failed:', error.message)
  } else {
    console.log('✅ Memory saved:', data)
  }
}

async function run() {
  const project = await getOrCreateProject()

  await saveMemory({
    topic: 'Initial Project Setup',
    content: 'Created projects and memory tables, linked them via UUID keys.',
    tags: ['schema', 'setup'],
    project_id: project.project_id
  })
}

run()
