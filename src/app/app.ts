import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  collegeName = 'R. B. Madkholkar Mahavidyalaya, Chandgad';
  programName = 'B.Sc. Computer Science';

  stats: StatItem[] = [
    { value: '3 Years', label: 'Undergraduate Program' },
    { value: 'IT Focus', label: 'Career-Oriented Learning' },
    { value: 'Hands-on', label: 'Training & Projects' },
    { value: 'Support', label: 'Internship & Placement' },
  ];

  whyChoose: FeatureItem[] = [
    {
      icon: '₹',
      title: 'Affordable Education',
      text: 'A quality computer science education with practical value and strong career potential.',
    },
    {
      icon: '3',
      title: 'Three-Year Degree',
      text: 'A complete undergraduate pathway designed to build a strong technical foundation.',
    },
    {
      icon: '⚙',
      title: 'Practical Skill Learning',
      text: 'Programming, data science, AI, web development, and real project experience.',
    },
    {
      icon: '🎓',
      title: 'Future Study Friendly',
      text: 'A strong base for higher studies like M.Sc., MCA, MBA, UPSC, and other competitive exams.',
    },
  ];

  courses: FeatureItem[] = [
    {
      icon: '💻',
      title: 'Software Developer',
      text: 'Build applications, solve problems, and grow into a full-stack or backend role.',
    },
    {
      icon: '📊',
      title: 'Data Analyst / Data Scientist',
      text: 'Learn data handling, analysis, and insights for modern decision-making.',
    },
    {
      icon: '🌐',
      title: 'Web Developer',
      text: 'Create responsive websites and web applications using modern technologies.',
    },
    {
      icon: '🔒',
      title: 'Cyber Security Expert',
      text: 'Understand security concepts and protect systems from digital threats.',
    },
    {
      icon: '🤖',
      title: 'AI / ML Engineer',
      text: 'Explore artificial intelligence, machine learning, and automation workflows.',
    },
    {
      icon: '🏢',
      title: 'Government & Competitive Exams',
      text: 'Build a strong academic base for government jobs and entrance exams.',
    },
  ];

  highlights: FeatureItem[] = [
    {
      icon: '📘',
      title: 'Industry-Oriented Syllabus',
      text: 'The curriculum is designed to match current industry expectations and trends.',
    },
    {
      icon: '🛠',
      title: 'Hands-on Training & Projects',
      text: 'Students get practical work, assignments, and project-based learning.',
    },
    {
      icon: '🏢',
      title: 'Internship Opportunities',
      text: 'Guidance for internship exposure and real-world learning experience.',
    },
    {
      icon: '🤝',
      title: 'Placement Assistance',
      text: 'Support for career preparation, interviews, and job readiness.',
    },
  ];

  contactNumbers = [
    '8975989284',
    '9404123080',
    '9420333760',
  ];
}