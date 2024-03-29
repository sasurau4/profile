import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { CareerCard } from '../components'
import { CareerItem } from '../types'

const careers: CareerItem[] = [
  {
    details: [
      "I worked at WACUL INC. I worked for AI Analyst that's the SaaS product of WACUL.",
      'First, I made report from Google Analytics with Microsoft Excel, Microsoft Power Point when I worked as part time job',
      'After while, I joined WACUL as employee and was engaged in logic development',
      'Next, I changed the job to UX design and Project management about AI Analyst. Think about features, screen layout and design, communications with bussiness and development team etc.',
    ],
    headline: 'August 2014 - February 2018',
    positions: ['Data Scientist', 'UX designer', 'Project Manager'],
    skills: [
      'Scala',
      'Python',
      'Javascript',
      'jQuery',
      'UI/UX',
      'Sketch',
      'Management',
    ],
    links: [],
  },
  {
    details: [
      'I worked at M3 Career, Inc. I was involved in two project.',
      'One is the new native mobile application for doctors. The other is the renewal project of lagacy web system about job change for doctors',
      'In mobile app project, I used React Native and GraphQL. I mainly developed about front-end and implemented back-end server written by Kotlin and Java a little.',
      'In renewal project, I took over one of the biggest issue from colleague. I used Vue.js and Ruby on Rails when I modernized a functionality by refactoring.',
      'I also worked sub project. I developed react-native app, maricuruapp. If you want to know, please see links',
    ],
    headline: 'March 2018 - February 2019',
    positions: ['Web Application Engineer'],
    skills: [
      'JavaScript',
      'Node.js',
      'React Native',
      'Kotlin',
      'Java',
      'GraphQL',
      'Vue.js',
      'Ruby on Rails',
    ],
    links: ['https://maricuru.com/pages/app/'],
  },
  {
    details: [
      "I work at CureApp, Inc. I'm developing degital therapeutics app by React Native, React and Node.js with AWS Lambda.",
      'I also work for side project for dentists SNS named 1D app with React Native. If you want to know more, please refer to the links',
      "I contribute to some OSS, but it's little. I organize the Nihonbashi.js and I'm the main staff of TypeScript JP. So I want to focus on more OSS and community activities.",
    ],
    headline: 'March 2019 - June 2021',
    positions: ['Engineer'],
    skills: [
      'Node.js',
      'React Native',
      'TypeScript',
      'React',
      'aws-cdk',
      'aws-amplify',
    ],
    links: ['https://news.oned.jp/app-release/', 'https://typescript-jp.dev/'],
  },
  {
    details: [
      'I started SRE job at CureApp, Inc and joined various projects via THEHUB, Inc.',
      'In SRE, I setup the application monitoring, researched technical challenge and think about determine SLO etc. The SRE team worked with each project members in entire company.',
      'In THEHUB, I was involved to various application development projects. One is SaaS for Customer success with Laravel, another is Real time gaming app with Elixir and another is MEO application for Real store managers with Go.',
      'I setup CI/CD, lead some projects and develop application with the team. All projects were exciting for me.'
    ],
    headline: 'Jun 2021 - Present',
    positions: ['Full Engineer', 'SRE'],
    skills: [
      'Node.js',
      'TypeScript',
      'React',
      'aws-cdk',
      'AWS ECS',
      'Terraform',
      'PHP/Laravel',
      'Elixir',
      'Go',
      'Docker'
    ],
    links: ['https://thehub.co.jp/'],
  },
  {
    details: [
      'I welcome attractive and exiciting job opportunities at anytime wherever.',
      'If you want to contact me, please contact from below services.',
      "I won't reply to contact with company name hidden.",
      "No matter how attractive the change is, I can't immediately quit my company. So, I welcome offers that look ahead for months to a year. I'd like to start with knowing each other.",
    ],
    headline: 'The future',
    positions: ['Engineer'],
    skills: ['Unknown'],
    links: [],
  },
]

export default function Career() {
  return (
    <Container id="career">
      <Grid
        container={true}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: '100vw',
          minHeight: '100vh',
        }}
        spacing={4}
      >
        {careers.map((career, i) => (
          <Grid item={true} key={i} xs={12} md={8}>
            <CareerCard {...career} isLast={i + 1 === careers.length} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
