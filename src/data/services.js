import { Home, Building2, Store, Construction } from 'lucide-react';

export const services = [
  {
    id: 'house',
    title: 'House Septic Tank Cleaning',
    description: 'Full cleaning of your home\'s septic tank — we inspect, clean, and check everything is working properly before we leave.',
    scenario: 'Ideal for independent house owners facing slow drains or bad odors.',
    icon: Home,
    image: '/images/services/house.webp',
    details: 'When your home\'s septic tank is full or clogged, it can lead to unpleasant odors, slow drains, and serious health hazards. Our specialized house septic tank cleaning service ensures that your entire system is completely emptied, cleaned, and restored to perfect working order. We use powerful vacuum trucks to remove all waste efficiently and cleanly, without leaving any mess in your yard.',
    process: [
      { step: 1, title: 'Initial Inspection', desc: 'We locate and carefully open your septic tank to assess the waste level and check for any blockages.' },
      { step: 2, title: 'Complete Pumping', desc: 'Our high-power vacuum hoses remove all sludge, liquids, and solid waste from the tank.' },
      { step: 3, title: 'Thorough Cleaning', desc: 'We wash down the walls of the tank to remove stubborn buildup and ensure maximum capacity is restored.' },
      { step: 4, title: 'Final Testing', desc: 'We check the drains inside your home to ensure water flows freely before sealing the tank securely.' }
    ]
  },
  {
    id: 'apartment',
    title: 'Apartment & Complex Cleaning',
    description: 'High-capacity cleaning for multi-unit buildings. We work with association managers for minimal disruption to residents.',
    scenario: 'Ideal for associations dealing with scheduled maintenance or complex-wide blockages.',
    icon: Building2,
    image: '/images/services/apartment.webp',
    details: 'Apartment complexes and multi-unit buildings generate significantly more waste than single homes, requiring robust and high-capacity septic solutions. Our team is equipped with industrial-grade vacuum trucks capable of handling large volumes quickly. We coordinate closely with building management to schedule cleanings during off-peak hours, ensuring minimal disruption to the residents while maintaining a highly hygienic environment.',
    process: [
      { step: 1, title: 'Site Assessment', desc: 'We coordinate with facility managers to identify all access points and assess the total volume needed.' },
      { step: 2, title: 'Safe Setup', desc: 'We set up our equipment with safety barriers to protect residents and ensure a clean working area.' },
      { step: 3, title: 'High-Volume Pumping', desc: 'Using our largest capacity trucks, we swiftly pump out massive amounts of waste from the complex tanks.' },
      { step: 4, title: 'Deodorization & Cleanup', desc: 'We ensure the area is completely sanitized and deodorized after the job is done, leaving no trace behind.' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial & Shop Cleaning',
    description: 'Fast, discreet drainage and septic service for shops, offices, and small businesses. We respect your operating hours.',
    scenario: 'Ideal for businesses needing quick resolution without turning away customers.',
    icon: Store,
    image: '/images/services/commercial.webp',
    details: 'A plumbing or septic issue in a commercial space can immediately halt business operations, turning away customers and causing revenue loss. We provide rapid-response commercial cleaning services tailored for shops, restaurants, and offices. Our team works discreetly and efficiently, often after operating hours if needed, to resolve blockages, pump out grease traps, and clean septic tanks so your business can run smoothly.',
    process: [
      { step: 1, title: 'Emergency Response', desc: 'We offer rapid deployment to your business location to prevent operational downtime.' },
      { step: 2, title: 'Discreet Operations', desc: 'We route our hoses carefully and work quietly to avoid disturbing your customers or employees.' },
      { step: 3, title: 'Targeted Cleaning', desc: 'Whether it is a grease trap or a main septic line, we use targeted high-pressure cleaning to resolve the issue.' },
      { step: 4, title: 'Maintenance Advice', desc: 'We provide actionable advice on how to prevent future blockages based on your specific commercial setup.' }
    ]
  },
  {
    id: 'manhole',
    title: 'Manhole & Drain Cleaning',
    description: 'Professional clearing of blocked street manholes and main drainage lines using proper safety equipment.',
    scenario: 'Ideal for overflowing community drains or severe blockages outside the main property.',
    icon: Construction,
    image: '/images/services/cleaning-process.webp',
    details: 'Overflowing manholes and blocked main drainage lines pose severe health and environmental risks to the community. We offer heavy-duty manhole and street drain cleaning services to clear out solid waste, plastics, and mud that commonly block these systems. Our trained professionals use specialized safety gear and high-pressure jetting equipment to blast through the toughest clogs and restore proper community drainage.',
    process: [
      { step: 1, title: 'Safety First', desc: 'We secure the area around the manhole with cones and signage to protect pedestrians and traffic.' },
      { step: 2, title: 'Gas Testing', desc: 'We test for hazardous gases inside the manhole before any clearing work begins.' },
      { step: 3, title: 'High-Pressure Jetting', desc: 'We use specialized water jetting tools to break down hard blocks of debris, roots, and solid waste.' },
      { step: 4, title: 'Debris Removal', desc: 'All extracted waste is safely vacuumed into our trucks and disposed of according to municipal regulations.' }
    ]
  }
];
