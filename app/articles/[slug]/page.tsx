import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ShareButton } from "@/components/share-button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { notFound } from "next/navigation"

const articles = {
  "design-systems-scale": {
    title: "Building Design Systems That Scale",
    category: "Design Systems",
    readTime: "8 min read",
    date: "March 15, 2024",
    image: "/design-system-article.jpg",
    author: "Hesham Faragallah",
    content: `
      <h2>The Foundation of Scalable Design</h2>
      <p>Design systems are more than just a collection of components—they're the foundation of consistent, scalable product development. After working on multiple large-scale projects including RTA's public transportation system, I've learned that a well-structured design system can make or break a product's success.</p>

      <h2>Key Principles for Scalable Design Systems</h2>
      
      <h3>1. Start with Design Tokens</h3>
      <p>Design tokens are the atomic elements of your design system. They include colors, typography, spacing, and other visual properties that form the foundation of your design language. By defining these early, you create a single source of truth that can be easily maintained and updated across all platforms.</p>

      <h3>2. Component Architecture</h3>
      <p>Build components with composition in mind. Each component should be:</p>
      <ul>
        <li>Reusable across different contexts</li>
        <li>Flexible enough to handle various use cases</li>
        <li>Well-documented with clear usage guidelines</li>
        <li>Accessible by default</li>
      </ul>

      <h3>3. Documentation is Critical</h3>
      <p>A design system is only as good as its documentation. Include:</p>
      <ul>
        <li>Component usage guidelines</li>
        <li>Code examples</li>
        <li>Accessibility considerations</li>
        <li>Do's and don'ts</li>
        <li>Real-world examples</li>
      </ul>

      <h2>Maintaining Your Design System</h2>
      <p>The work doesn't stop after the initial build. Regular maintenance includes:</p>
      <ul>
        <li>Version control and changelog management</li>
        <li>Regular audits of component usage</li>
        <li>Gathering feedback from designers and developers</li>
        <li>Continuous improvement based on real-world usage</li>
      </ul>

      <h2>Collaboration Between Design and Engineering</h2>
      <p>Success requires close collaboration between design and engineering teams. At RTA, we established weekly sync meetings where designers and developers reviewed components together, ensuring that the implementation matched the design intent while remaining technically feasible.</p>

      <h2>Measuring Success</h2>
      <p>Track metrics like:</p>
      <ul>
        <li>Component adoption rate</li>
        <li>Time saved in design and development</li>
        <li>Consistency across products</li>
        <li>Developer satisfaction scores</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building a design system that scales requires careful planning, strong collaboration, and ongoing maintenance. But the investment pays off in faster development cycles, more consistent user experiences, and happier teams. Start small, iterate often, and always keep your users' needs at the center of your decisions.</p>
    `,
  },
  "user-research-methods": {
    title: "Essential User Research Methods for Product Design",
    category: "Research",
    readTime: "10 min read",
    date: "March 8, 2024",
    image: "/user-research-article.jpg",
    author: "Hesham Faragallah",
    content: `
      <h2>Why User Research Matters</h2>
      <p>User research is the foundation of human-centered design. Throughout my career working on projects like the Ministry of Health's digital transformation and RTA's public transportation app, I've seen firsthand how proper research can make the difference between a product that users love and one they abandon.</p>

      <h2>Essential Research Methods</h2>

      <h3>1. User Interviews</h3>
      <p>One-on-one conversations with users provide deep insights into their needs, behaviors, and pain points. Key tips:</p>
      <ul>
        <li>Prepare open-ended questions</li>
        <li>Listen more than you talk</li>
        <li>Ask "why" to dig deeper</li>
        <li>Record sessions (with permission) for later analysis</li>
      </ul>

      <h3>2. Usability Testing</h3>
      <p>Watching users interact with your product reveals issues you'd never discover otherwise. During the RTA project, usability testing helped us identify navigation problems that would have significantly impacted user adoption.</p>

      <h3>3. Surveys and Questionnaires</h3>
      <p>Great for gathering quantitative data from a large user base. Use them to:</p>
      <ul>
        <li>Validate assumptions</li>
        <li>Measure satisfaction</li>
        <li>Prioritize features</li>
        <li>Track changes over time</li>
      </ul>

      <h3>4. Field Studies</h3>
      <p>Observing users in their natural environment provides context that lab testing can't. For the public transportation app, we spent days riding buses and observing how people actually used transit systems.</p>

      <h3>5. Card Sorting</h3>
      <p>Helps understand how users categorize and organize information, crucial for information architecture decisions.</p>

      <h2>When to Use Each Method</h2>
      <p>Different stages of product development call for different research methods:</p>
      <ul>
        <li><strong>Discovery Phase:</strong> User interviews, field studies, surveys</li>
        <li><strong>Design Phase:</strong> Card sorting, tree testing, prototype testing</li>
        <li><strong>Validation Phase:</strong> Usability testing, A/B testing</li>
        <li><strong>Post-Launch:</strong> Analytics, surveys, continuous usability testing</li>
      </ul>

      <h2>Analyzing and Synthesizing Research</h2>
      <p>Collecting data is only half the battle. The real value comes from analysis:</p>
      <ul>
        <li>Look for patterns across multiple users</li>
        <li>Create user personas based on real data</li>
        <li>Map user journeys to identify pain points</li>
        <li>Prioritize findings based on impact and frequency</li>
      </ul>

      <h2>Communicating Research Findings</h2>
      <p>Research is only valuable if it influences decisions. Make your findings actionable by:</p>
      <ul>
        <li>Creating clear, visual presentations</li>
        <li>Including video clips of user sessions</li>
        <li>Providing specific recommendations</li>
        <li>Tying findings to business goals</li>
      </ul>

      <h2>Conclusion</h2>
      <p>User research isn't a one-time activity—it's an ongoing process that should inform every design decision. By combining multiple research methods and making research a regular part of your workflow, you'll create products that truly meet user needs and drive business success.</p>
    `,
  },
  "mobile-first-design": {
    title: "Mobile-First Design in Public Transportation Apps",
    category: "Mobile Design",
    readTime: "12 min read",
    date: "February 28, 2024",
    image: "/mobile-first-article.jpg",
    author: "Hesham Faragallah",
    content: `
      <h2>The Mobile-First Imperative</h2>
      <p>When designing the RTA Sharjah Public Transportation App, we knew from day one that mobile had to be our primary focus. Public transportation users are constantly on the move, checking schedules while waiting at bus stops, planning routes while commuting, and tracking buses in real-time. A mobile-first approach wasn't just a design philosophy—it was a necessity.</p>

      <h2>Understanding the Context</h2>
      <p>Mobile users in public transportation scenarios face unique challenges:</p>
      <ul>
        <li>Limited attention span while multitasking</li>
        <li>Varying lighting conditions (bright sunlight to dark buses)</li>
        <li>One-handed usage while carrying bags or holding handrails</li>
        <li>Intermittent connectivity in tunnels or remote areas</li>
        <li>Time pressure when catching buses</li>
      </ul>

      <h2>Design Principles for Transit Apps</h2>

      <h3>1. Prioritize Speed and Efficiency</h3>
      <p>Users need information fast. We designed the home screen to show:</p>
      <ul>
        <li>Nearest bus stops with real-time arrivals</li>
        <li>Saved favorite routes</li>
        <li>Quick access to trip planning</li>
      </ul>
      <p>Everything critical is accessible within two taps.</p>

      <h3>2. Design for One-Handed Use</h3>
      <p>Primary actions are placed in the thumb-friendly zone at the bottom of the screen. Navigation follows familiar patterns, and important buttons are large enough to tap easily while moving.</p>

      <h3>3. Optimize for Glanceability</h3>
      <p>Information hierarchy is crucial. We use:</p>
      <ul>
        <li>Large, bold typography for critical information</li>
        <li>Color coding for different bus routes</li>
        <li>Icons to convey information quickly</li>
        <li>Progressive disclosure to avoid overwhelming users</li>
      </ul>

      <h3>4. Handle Offline Scenarios</h3>
      <p>The app caches:</p>
      <ul>
        <li>Recently viewed routes and schedules</li>
        <li>Saved favorite locations</li>
        <li>Static map data for offline navigation</li>
      </ul>

      <h2>Real-Time Features</h2>
      <p>Real-time tracking was our most requested feature. We implemented:</p>
      <ul>
        <li>Live bus location on maps</li>
        <li>Accurate arrival predictions</li>
        <li>Service alerts and disruptions</li>
        <li>Crowding information</li>
      </ul>

      <h2>Accessibility Considerations</h2>
      <p>Public transportation serves everyone, so accessibility was non-negotiable:</p>
      <ul>
        <li>High contrast mode for visibility in bright sunlight</li>
        <li>Screen reader support for visually impaired users</li>
        <li>Large text options</li>
        <li>Voice commands for hands-free operation</li>
      </ul>

      <h2>Testing in Real Conditions</h2>
      <p>We conducted extensive field testing:</p>
      <ul>
        <li>Riding buses with users to observe real usage</li>
        <li>Testing in various lighting conditions</li>
        <li>Simulating poor network conditions</li>
        <li>Gathering feedback from diverse user groups</li>
      </ul>

      <h2>Results and Impact</h2>
      <p>The mobile-first approach paid off:</p>
      <ul>
        <li>85% of users access the app on mobile devices</li>
        <li>Average session duration: 2 minutes (perfect for quick checks)</li>
        <li>4.5+ star rating in app stores</li>
        <li>Significant increase in public transportation usage</li>
      </ul>

      <h2>Lessons Learned</h2>
      <p>Key takeaways from this project:</p>
      <ul>
        <li>Context is everything—design for real-world usage scenarios</li>
        <li>Speed and simplicity trump feature richness</li>
        <li>Test with actual users in actual conditions</li>
        <li>Accessibility benefits everyone, not just users with disabilities</li>
        <li>Offline functionality is crucial for transportation apps</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Mobile-first design for public transportation apps requires deep understanding of user context, relentless focus on speed and simplicity, and extensive real-world testing. By putting users' needs first and designing for the constraints of mobile usage, we created an app that truly serves its purpose: making public transportation more accessible and convenient for everyone.</p>
    `,
  },
  "accessibility-best-practices": {
    title: "Accessibility Best Practices for Digital Products",
    category: "Accessibility",
    readTime: "7 min read",
    date: "February 20, 2024",
    image: "/accessibility-article.jpg",
    author: "Hesham Faragallah",
    content: `
      <h2>Why Accessibility Matters</h2>
      <p>Accessibility isn't just about compliance—it's about creating products that everyone can use, regardless of their abilities. Throughout my career, I've seen how accessible design not only helps users with disabilities but improves the experience for everyone.</p>

      <h2>Core Principles of Accessible Design</h2>

      <h3>1. Perceivable</h3>
      <p>Information must be presentable to users in ways they can perceive:</p>
      <ul>
        <li>Provide text alternatives for images</li>
        <li>Ensure sufficient color contrast (4.5:1 for normal text)</li>
        <li>Don't rely on color alone to convey information</li>
        <li>Make text resizable without breaking layout</li>
      </ul>

      <h3>2. Operable</h3>
      <p>Users must be able to operate the interface:</p>
      <ul>
        <li>Make all functionality keyboard accessible</li>
        <li>Provide enough time to read and use content</li>
        <li>Avoid content that causes seizures (no flashing more than 3 times per second)</li>
        <li>Help users navigate and find content</li>
      </ul>

      <h3>3. Understandable</h3>
      <p>Information and operation must be understandable:</p>
      <ul>
        <li>Use clear, simple language</li>
        <li>Make pages appear and operate in predictable ways</li>
        <li>Help users avoid and correct mistakes</li>
        <li>Provide clear error messages and recovery paths</li>
      </ul>

      <h3>4. Robust</h3>
      <p>Content must work with current and future technologies:</p>
      <ul>
        <li>Use semantic HTML</li>
        <li>Ensure compatibility with assistive technologies</li>
        <li>Follow web standards</li>
      </ul>

      <h2>Practical Implementation Tips</h2>

      <h3>Color and Contrast</h3>
      <p>Always test your color combinations:</p>
      <ul>
        <li>Use tools like WebAIM's contrast checker</li>
        <li>Test in grayscale to ensure information isn't lost</li>
        <li>Provide high contrast mode option</li>
      </ul>

      <h3>Keyboard Navigation</h3>
      <p>Essential for users who can't use a mouse:</p>
      <ul>
        <li>Ensure logical tab order</li>
        <li>Make focus indicators clearly visible</li>
        <li>Provide keyboard shortcuts for common actions</li>
        <li>Test your entire app using only keyboard</li>
      </ul>

      <h3>Screen Reader Support</h3>
      <p>Make your content work with screen readers:</p>
      <ul>
        <li>Use proper heading hierarchy (h1, h2, h3)</li>
        <li>Add ARIA labels where needed</li>
        <li>Provide alt text for images</li>
        <li>Use semantic HTML elements</li>
      </ul>

      <h3>Forms and Input</h3>
      <p>Forms are critical interaction points:</p>
      <ul>
        <li>Label all form fields clearly</li>
        <li>Provide helpful error messages</li>
        <li>Show field requirements upfront</li>
        <li>Allow users to review and correct before submitting</li>
      </ul>

      <h2>Testing for Accessibility</h2>
      <p>Regular testing is crucial:</p>
      <ul>
        <li>Use automated tools (aXe, WAVE, Lighthouse)</li>
        <li>Test with actual screen readers (NVDA, JAWS, VoiceOver)</li>
        <li>Navigate using only keyboard</li>
        <li>Test with users who have disabilities</li>
        <li>Check on different devices and browsers</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Using div/span instead of semantic HTML</li>
        <li>Removing focus indicators for aesthetic reasons</li>
        <li>Auto-playing videos with sound</li>
        <li>Using placeholder text as labels</li>
        <li>Creating keyboard traps</li>
        <li>Relying solely on automated testing</li>
      </ul>

      <h2>Business Benefits</h2>
      <p>Accessibility isn't just the right thing to do—it makes business sense:</p>
      <ul>
        <li>Expands your potential user base</li>
        <li>Improves SEO</li>
        <li>Reduces legal risk</li>
        <li>Enhances brand reputation</li>
        <li>Often improves usability for everyone</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Accessibility should be built in from the start, not bolted on at the end. By following these best practices and making accessibility a core part of your design process, you'll create products that work better for everyone. Remember: accessible design is good design.</p>
    `,
  },
  "prototyping-techniques": {
    title: "Advanced Prototyping Techniques for Complex Interactions",
    category: "Prototyping",
    readTime: "9 min read",
    date: "February 12, 2024",
    image: "/prototyping-article.jpg",
    author: "Hesham Faragallah",
    content: `
      <h2>The Power of Prototyping</h2>
      <p>Prototyping is where design ideas come to life. Throughout my work on complex systems like RTA's transportation app and the Ministry of Health's digital services, I've learned that the right prototyping approach can save months of development time and prevent costly mistakes.</p>

      <h2>Choosing the Right Fidelity</h2>

      <h3>Low-Fidelity Prototypes</h3>
      <p>Best for early exploration:</p>
      <ul>
        <li>Paper sketches for rapid ideation</li>
        <li>Wireframes for structure and flow</li>
        <li>Quick to create and iterate</li>
        <li>Focus on functionality over aesthetics</li>
      </ul>

      <h3>Mid-Fidelity Prototypes</h3>
      <p>For testing interactions:</p>
      <ul>
        <li>Clickable wireframes</li>
        <li>Basic interactions and transitions</li>
        <li>Test navigation and user flows</li>
        <li>Gather feedback on structure</li>
      </ul>

      <h3>High-Fidelity Prototypes</h3>
      <p>For validation and stakeholder buy-in:</p>
      <ul>
        <li>Pixel-perfect designs</li>
        <li>Complex interactions and animations</li>
        <li>Real content and data</li>
        <li>Production-ready specifications</li>
      </ul>

      <h2>Advanced Prototyping Techniques</h2>

      <h3>1. Component-Based Prototyping</h3>
      <p>Build reusable components that mirror your design system:</p>
      <ul>
        <li>Create master components in Figma</li>
        <li>Use variants for different states</li>
        <li>Build complex interactions from simple parts</li>
        <li>Maintain consistency across screens</li>
      </ul>

      <h3>2. Data-Driven Prototypes</h3>
      <p>Use real or realistic data:</p>
      <ul>
        <li>Connect to APIs for live data</li>
        <li>Use plugins to populate with realistic content</li>
        <li>Test edge cases (long names, empty states)</li>
        <li>Validate designs with actual content</li>
      </ul>

      <h3>3. Micro-Interactions</h3>
      <p>Details that bring interfaces to life:</p>
      <ul>
        <li>Button hover and press states</li>
        <li>Loading animations</li>
        <li>Success/error feedback</li>
        <li>Smooth transitions between states</li>
      </ul>

      <h3>4. Conditional Logic</h3>
      <p>Create dynamic, realistic prototypes:</p>
      <ul>
        <li>Show/hide elements based on user input</li>
        <li>Branch flows based on choices</li>
        <li>Simulate form validation</li>
        <li>Create personalized experiences</li>
      </ul>

      <h2>Tools and Workflows</h2>

      <h3>Figma for Design and Prototyping</h3>
      <p>My primary tool for most projects:</p>
      <ul>
        <li>Collaborative design in real-time</li>
        <li>Powerful prototyping features</li>
        <li>Component libraries and design systems</li>
        <li>Developer handoff tools</li>
      </ul>

      <h3>ProtoPie for Complex Interactions</h3>
      <p>When Figma isn't enough:</p>
      <ul>
        <li>Advanced animations and transitions</li>
        <li>Sensor-based interactions (tilt, shake)</li>
        <li>Multi-device prototypes</li>
        <li>Voice and sound interactions</li>
      </ul>

      <h3>Code Prototypes</h3>
      <p>For the most complex interactions:</p>
      <ul>
        <li>React for web prototypes</li>
        <li>React Native for mobile</li>
        <li>Full control over interactions</li>
        <li>Reusable in production</li>
      </ul>

      <h2>Prototyping Complex Flows</h2>

      <h3>Multi-Step Processes</h3>
      <p>For forms, onboarding, or checkout:</p>
      <ul>
        <li>Show progress clearly</li>
        <li>Allow users to go back and edit</li>
        <li>Save progress automatically</li>
        <li>Provide clear next steps</li>
      </ul>

      <h3>Real-Time Features</h3>
      <p>For live tracking or messaging:</p>
      <ul>
        <li>Simulate real-time updates</li>
        <li>Show loading and updating states</li>
        <li>Handle connection issues gracefully</li>
        <li>Provide offline functionality</li>
      </ul>

      <h2>Testing with Prototypes</h2>

      <h3>Usability Testing</h3>
      <p>Get feedback early and often:</p>
      <ul>
        <li>Test with 5-8 users per iteration</li>
        <li>Give users realistic tasks</li>
        <li>Observe without interfering</li>
        <li>Ask follow-up questions</li>
      </ul>

      <h3>Stakeholder Reviews</h3>
      <p>Get buy-in from decision makers:</p>
      <ul>
        <li>Present in context of user goals</li>
        <li>Show the full user journey</li>
        <li>Explain design decisions</li>
        <li>Be open to feedback</li>
      </ul>

      <h2>From Prototype to Production</h2>

      <h3>Developer Handoff</h3>
      <p>Make implementation smooth:</p>
      <ul>
        <li>Document interactions clearly</li>
        <li>Provide timing and easing specifications</li>
        <li>Include edge cases and error states</li>
        <li>Be available for questions</li>
      </ul>

      <h3>Design QA</h3>
      <p>Ensure implementation matches design:</p>
      <ul>
        <li>Review builds regularly</li>
        <li>Test on actual devices</li>
        <li>Check all interaction states</li>
        <li>Verify animations and transitions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Advanced prototyping techniques allow you to validate complex interactions before writing a single line of production code. By choosing the right fidelity, using appropriate tools, and testing thoroughly, you can create prototypes that not only communicate your vision but also uncover issues early when they're cheap to fix. Remember: the goal isn't to create perfect prototypes—it's to learn and iterate quickly.</p>
    `,
  },
  "design-engineering-collaboration": {
    title: "Bridging the Gap: Design and Engineering Collaboration",
    category: "Collaboration",
    readTime: "6 min read",
    date: "February 5, 2024",
    image: "/collaboration-article.jpg",
    author: "Hesham Faragallah",
    content: `
      <h2>The Collaboration Challenge</h2>
      <p>One of the most common challenges in product development is the gap between design and engineering. Throughout my career, I've worked to bridge this gap, and I've learned that great products come from great collaboration.</p>

      <h2>Common Pain Points</h2>

      <h3>From the Design Perspective</h3>
      <ul>
        <li>Designs not implemented as intended</li>
        <li>Last-minute technical constraints</li>
        <li>Lack of feedback during design phase</li>
        <li>Difficulty understanding technical limitations</li>
      </ul>

      <h3>From the Engineering Perspective</h3>
      <ul>
        <li>Designs that are technically infeasible</li>
        <li>Missing specifications and edge cases</li>
        <li>Constant design changes</li>
        <li>Unrealistic timelines</li>
      </ul>

      <h2>Building Better Collaboration</h2>

      <h3>1. Involve Engineers Early</h3>
      <p>Don't wait until designs are "done":</p>
      <ul>
        <li>Include engineers in discovery and ideation</li>
        <li>Get technical feedback on concepts</li>
        <li>Understand constraints before detailed design</li>
        <li>Collaborate on solutions together</li>
      </ul>

      <h3>2. Establish Shared Understanding</h3>
      <p>Create common ground:</p>
      <ul>
        <li>Build and maintain a design system together</li>
        <li>Use consistent terminology</li>
        <li>Document decisions and rationale</li>
        <li>Share user research findings</li>
      </ul>

      <h3>3. Regular Communication</h3>
      <p>Stay in sync throughout the process:</p>
      <ul>
        <li>Weekly design-engineering sync meetings</li>
        <li>Quick daily check-ins during implementation</li>
        <li>Shared Slack channels for questions</li>
        <li>Regular design reviews of implemented features</li>
      </ul>

      <h3>4. Mutual Respect and Learning</h3>
      <p>Appreciate each other's expertise:</p>
      <ul>
        <li>Designers learn basic technical concepts</li>
        <li>Engineers understand design principles</li>
        <li>Both sides explain their constraints</li>
        <li>Find creative solutions together</li>
      </ul>

      <h2>Practical Workflows</h2>

      <h3>Design Handoff Process</h3>
      <p>Make handoffs smooth and complete:</p>
      <ul>
        <li>Provide complete specifications in Figma</li>
        <li>Document all interaction states</li>
        <li>Include edge cases and error states</li>
        <li>Walk through designs together</li>
        <li>Be available for questions</li>
      </ul>

      <h3>Implementation Review</h3>
      <p>Ensure quality throughout development:</p>
      <ul>
        <li>Review work-in-progress builds</li>
        <li>Test on actual devices</li>
        <li>Provide constructive feedback</li>
        <li>Be flexible when needed</li>
        <li>Celebrate wins together</li>
      </ul>

      <h2>Tools for Collaboration</h2>

      <h3>Design Tools</h3>
      <ul>
        <li>Figma for design and developer handoff</li>
        <li>Zeplin or Figma Dev Mode for specifications</li>
        <li>Storybook for component documentation</li>
      </ul>

      <h3>Communication Tools</h3>
      <ul>
        <li>Slack for quick questions</li>
        <li>Linear or Jira for task tracking</li>
        <li>Loom for async video explanations</li>
        <li>Miro for collaborative workshops</li>
      </ul>

      <h2>Case Study: RTA Project</h2>
      <p>On the RTA project, we established:</p>
      <ul>
        <li>Weekly design-engineering syncs</li>
        <li>Shared component library in Figma and code</li>
        <li>Design QA process for every feature</li>
        <li>Regular pair programming sessions</li>
      </ul>
      <p>Results:</p>
      <ul>
        <li>95% design implementation accuracy</li>
        <li>Faster development cycles</li>
        <li>Fewer bugs and rework</li>
        <li>Higher team satisfaction</li>
      </ul>

      <h2>Handling Disagreements</h2>
      <p>When design and engineering clash:</p>
      <ul>
        <li>Focus on user needs, not personal preferences</li>
        <li>Use data to inform decisions</li>
        <li>Be willing to compromise</li>
        <li>Escalate to product leadership if needed</li>
        <li>Document decisions for future reference</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track collaboration effectiveness:</p>
      <ul>
        <li>Design implementation accuracy</li>
        <li>Time from design to implementation</li>
        <li>Number of design-related bugs</li>
        <li>Team satisfaction scores</li>
        <li>Product quality metrics</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Great products require great collaboration between design and engineering. By involving each other early, communicating regularly, respecting each other's expertise, and using the right tools and processes, you can bridge the gap and create products that are both beautiful and technically excellent. Remember: you're on the same team, working toward the same goal—creating amazing experiences for users.</p>
    `,
  },
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://heshamfaragallah.com"}/articles/${slug}`

  return (
    <main className="min-h-screen bg-black text-neutral-100 antialiased">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
            radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,.16), transparent 60%),
            radial-gradient(800px 400px at 80% 10%, rgba(249,115,22,.14), transparent 60%),
            radial-gradient(1000px 600px at 50% 100%, rgba(0,0,0,.08), transparent 70%)
          `,
          }}
        />
      </div>

      <Navbar />

      <ShareButton title={article.title} url={articleUrl} />

      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 text-sm font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent text-balance">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-neutral-400 mb-8 pb-8 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>{article.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-neutral-300 prose-ul:my-6
              prose-li:my-2
              prose-strong:text-white prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-neutral-800">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image src="/hesham-profile.jpeg" alt={article.author} fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-white">{article.author}</p>
                <p className="text-neutral-400">Product Designer Lead</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
