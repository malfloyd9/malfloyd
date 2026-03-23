export const projects = [
  {
    slug: 'dc-inventory',
    title: 'Data Center Inventory Manager',
    category: 'systems',
    status: 'active',
    problem:
      'Rack positions and device records lived in spreadsheets that drifted from reality after moves and refreshes. Audits were slow and teams lacked a single place to see what was actually installed.',
    purpose:
      'Give planners and technicians one trustworthy view of inventory so capacity and change work could start from accurate data.',
    solution:
      'A Python-backed workflow to ingest and reconcile hardware records, surface exceptions, and support repeatable audit cycles. It ties together validation rules and simple reporting so gaps show up before they hit production plans.',
    tools: ['Python'],
    outcome:
      'Fewer surprises during installs and decommissions, faster reconciliation after changes, and clearer ownership when records needed cleanup.',
    image: null,
    link: null,
    featured: true,
  },

  {
    slug: 'asset-tracking',
    title: 'Lifecycle Asset Tracking',
    category: 'systems',
    status: 'active',
    problem:
      'Asset IDs, serials, and install dates were scattered across tickets and files. Installs and retirements did not always close the loop, so lifecycle status was hard to defend in reviews.',
    purpose:
      'Replace ad hoc tracking with a consistent model that follows hardware from receive through production to decommission.',
    solution:
      'Dashboards and automation that align intake data with floor reality, highlight stale records, and feed cleaner exports for planning and finance partners.',
    tools: ['Python', 'Excel', 'ServiceNow'],
    outcome:
      'Better traceability for audits, fewer duplicate or orphaned records, and less back-and-forth when someone asked “where is this asset now?”',
    image: null,
    link: null,
    featured: true,
  },

  {
    slug: 'capacity-planning',
    title: 'Capacity Planning Toolkit',
    category: 'systems',
    status: 'active',
    problem:
      'Power, cooling, and rack space decisions needed a forward view, but projections were rebuilt manually each quarter from static snapshots.',
    purpose:
      'Make growth and constraint scenarios visible early so leadership could align spend with real floor limits.',
    solution:
      'Structured assumptions and rollups for utilization trends, tied to known projects and reservations, with views aimed at planners rather than one-off spreadsheets.',
    tools: ['Python', 'Microsoft Visio'],
    outcome:
      'Clearer runway conversations, fewer last-minute scrambles for space or power, and a shared baseline when priorities shifted.',
    image: null,
    link: null,
    featured: false,
  },

  {
    slug: 'terrain-builds',
    title: 'D&D Terrain Builds',
    category: 'workshop',
    status: 'active',
    problem:
      'Published maps and tiles rarely matched the tone of our home campaign. I wanted modular pieces that could be rearranged without breaking immersion.',
    purpose:
      'Elevate sessions with physical texture and light—something players could lean into between turns.',
    solution:
      'Hand-built terrain using foam, paint washes, and printed accents: dungeons, wilderness tiles, and scatter that scales from one-shots to long arcs.',
    tools: ['XPS Foam', 'Hot Wire Cutter', 'Acrylic Paint'],
    outcome:
      'Tables feel more memorable; the builds keep teaching me proportion, color, and how much detail reads at arm’s length.',
    image: null,
    link: null,
    featured: true,
  },

  {
    slug: 'realms-keep',
    title: 'Realms Keep',
    category: 'workshop',
    status: 'in-progress',
    problem:
      'Many TTRPG accessories are generic or mass-produced. I wanted a small brand focused on table presence and story-friendly props.',
    purpose:
      'Realms Keep is the home for crafted gear and a calm storefront story that matches how we play.',
    solution:
      'Product experiments, photography, and a lightweight Astro site that presents the brand without noisy patterns—built to grow as the shop does.',
    tools: ['Astro', 'Etsy'],
    outcome:
      'Early listings validate interest; next steps are tighter product lines and more repeatable packaging and fulfillment.',
    image: null,
    link: null,
    featured: false,
  },

  {
    slug: 'woodworking',
    title: 'Shop Projects & Fixtures',
    category: 'workshop',
    status: 'active',
    problem:
      'Off-the-shelf storage never fit the workspace. Small jigs and boxes were needed to keep tools and game materials organized.',
    purpose:
      'Build durable, honest pieces that earn their floor space and age well with use.',
    solution:
      'Shelves, boxes, and fixtures in solid and plywood—cut lists kept simple, finishes chosen for wear rather than showroom gloss.',
    tools: ['Table Saw', 'Router', 'Hand Planes'],
    outcome:
      'A quieter, more usable shop; each project reinforces measuring twice and designing for real clutter, not magazine photos.',
    image: null,
    link: null,
    featured: false,
  },

  {
    slug: 'night-studio',
    title: 'Night Studio',
    category: 'lab',
    status: 'active',
    problem:
      'Most productivity apps feel like dashboards. I wanted a focused shell with ambient motion and sound that stayed out of the way.',
    purpose:
      'Prove I could ship a cohesive desktop-feeling experience while learning audio and animation patterns in React.',
    solution:
      'A lo-fi desktop productivity environment with ambient visuals (rain, lava lamp, analog clock) and audio. Built to feel like a calm workspace.',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Howler.js'],
    outcome:
      'I use it for focused blocks; the lab taught me how to keep performance sane with layered canvas and audio.',
    image: null,
    link: 'https://github.com/malfloyd9/night-studio-v1',
    featured: true,
  },

  {
    slug: 'flizzlr',
    title: 'Flizzlr',
    category: 'lab',
    status: 'experimental',
    problem:
      'Quick experiments often die in private repos. Flizzlr is a sandbox for odd UI ideas and micro-interactions without a product brief.',
    purpose:
      'Explore playful interfaces and data sketches that might inform later tools—or stay as sketches.',
    solution:
      'Small prototypes: input experiments, animation studies, and throwaway layouts versioned lightly so I can compare approaches.',
    tools: ['JavaScript'],
    outcome:
      'A place to fail fast; anything that survives three sessions graduates toward a real project.',
    image: null,
    link: null,
    featured: false,
  },
]

export const getProjects = (category) => projects.filter((p) => p.category === category)

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const getFeatured = () => projects.filter((p) => p.featured)
