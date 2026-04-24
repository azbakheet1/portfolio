/**
 * ====================================
 *  PORTFOLIO CONFIGURATION
 *  Edit this file to change any personal info,
 *  links, colors, or content across the site.
 * ====================================
 */

const config = {

  // ===== PERSONAL INFO =====
  name: 'Abdulaziz Bakheet',
  heroDisplay: 'Abdulaziz Bakheet',
  role: 'Strategic Data Analyst',
  tagline: 'Transforming raw complexity into spatial clarity.',
  footerTagline: 'Data architecture & spatial design.',

  // ===== SOCIAL / CONTACT =====
  email: '',                       // e.g. 'hello@abdulazizbakheet.com'
  github: '',                      // Your GitHub URL
  linkedin: 'https://linkedin.com/in/abdulaziz-bakheet', // Your LinkedIn URL
  location: 'Saudi Arabia & Remote',

  // ===== CERTIFICATIONS =====
  certifications: [
    {
      code: 'PL-300',
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      issuer: 'Microsoft',
      color: '#60a5fa',     // Badge accent color
    },
    {
      code: 'MOS Expert',
      title: 'Microsoft Office Specialist: Excel Expert 2019',
      issuer: 'Microsoft / Certiport',
      color: '#34d399',     // Badge accent color
    },
  ],

  // ===== SKILLS =====
  skills: [
    { id: 'dax',     title: 'Advanced DAX',        desc: 'Complex measures & calculated columns' },
    { id: 'sql',     title: 'Data Modeling & SQL',  desc: 'Star schemas, joins & CTEs' },
    { id: 'drill',   title: 'Drill-through',       desc: 'Interactive navigation paths' },
    { id: 'tooltip', title: 'Custom Tooltips',     desc: 'Rich context on hover' },
    { id: 'ai',      title: 'AI Insights',         desc: 'Key Influencers & Decomposition Trees' },
  ],

  // ===== PROJECTS =====
  // Each project has its own iframe link, video, accent color, and glow colors.
  // glow1/glow2 = the ambient background color behind each dashboard.
  projects: [
    {
      id: 'retail',
      title: 'Retail Performance',
      tagline: 'Analyzing store profitability & inventory health.',
      pill: 'Sales & Inventory',
      accent: '#B3AA99',
      glow1: 'rgba(179, 170, 153, 0.5)',
      glow2: 'rgba(179, 170, 153, 0.35)',
      iframe: 'https://app.powerbi.com/view?r=eyJrIjoiOTM4MzVkZmUtZjQ0OC00Yzk4LThjNTEtZmY1NTY5YzI5ZWM2IiwidCI6IjIwYTQ4N2E1LWI0OGYtNDgyYS04NGQ3LTE0NDkzMGQxYjk5YyIsImMiOjl9',
      video: import.meta.env.BASE_URL + 'videos/Retailes2.mp4',
      nativeW: 2560,
      nativeH: 1440,
    },
    {
      id: 'accident',
      title: 'Risk & Traffic Analytics',
      tagline: 'Geospatial mapping and AI severe crash prediction.',
      pill: 'AI Predictive Models',
      accent: '#9EC3E1',
      glow1: 'rgba(158, 195, 225, 0.5)',
      glow2: 'rgba(158, 195, 225, 0.35)',
      iframe: 'https://app.powerbi.com/view?r=eyJrIjoiOWI2MWUxMjctNDdhMy00ZmI0LThhMTMtODJiYjBiZGZhZjEzIiwidCI6IjIwYTQ4N2E1LWI0OGYtNDgyYS04NGQ3LTE0NDkzMGQxYjk5YyIsImMiOjl9',
      video: import.meta.env.BASE_URL + 'videos/accident.mp4',
      nativeW: 2560,
      nativeH: 1440,
    },
    {
      id: 'hospital',
      title: 'Clinical Operations',
      tagline: 'Patient flow and financial cost optimization.',
      pill: 'Healthcare Analytics',
      accent: '#CBA8BD',
      glow1: 'rgba(203, 168, 189, 0.5)',
      glow2: 'rgba(203, 168, 189, 0.35)',
      iframe: 'https://app.powerbi.com/view?r=eyJrIjoiNDFjNjIyNjgtZTQ0YS00YjFjLWIwYzAtMjFjNDI0MzdkNjAxIiwidCI6IjIwYTQ4N2E1LWI0OGYtNDgyYS04NGQ3LTE0NDkzMGQxYjk5YyIsImMiOjl9',
      video: null,
      nativeW: 2000,
      nativeH: 1600,
    },
    {
      id: 'hr',
      title: 'Talent & HR Analytics',
      tagline: 'Tracking turnover, satisfaction, and recruitment KPIs.',
      pill: 'Dark Mode Experience',
      accent: '#5EA1A7',
      glow1: 'rgba(94, 161, 167, 0.5)',
      glow2: 'rgba(94, 161, 167, 0.35)',
      iframe: 'https://app.powerbi.com/view?r=eyJrIjoiY2U0ZDE3ZDQtOWM2OS00YTkzLWE1OTEtZGFlZTRiYmY3ODE0IiwidCI6IjIwYTQ4N2E1LWI0OGYtNDgyYS04NGQ3LTE0NDkzMGQxYjk5YyIsImMiOjl9',
      video: import.meta.env.BASE_URL + 'videos/HR.mp4',
      nativeW: 2560,
      nativeH: 1440,
    },
  ],

};

export default config;
