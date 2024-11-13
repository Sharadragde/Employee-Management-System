
const employee = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Frontend Component Implementation",
        description: "Develop and test new UI component for website interface.",
        date: "2024-11-01",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Feature Bug Fixing",
        description:
          "Identify and fix bugs within core application functionalities.",
        date: "2024-11-02",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Cross-Browser Compatibility Testing",
        description:
          "Ensure website compatibility across multiple browsers and devices.",
        date: "2024-11-03",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    firstName: "Anita",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "UI Mockup Design",
        description:
          "Create high-fidelity mockups for client interface review and approval.",
        date: "2024-11-04",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Landing Page Redesign",
        description:
          "Redesign landing page based on recent customer feedback and analysis.",
        date: "2024-11-05",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Sunil",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Marketing Campaign Strategy",
        description:
          "Develop new campaign strategy to improve brand reach and engagement.",
        date: "2024-11-06",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Audience Engagement Analysis",
        description:
          "Analyze user engagement metrics across recent marketing campaigns.",
        date: "2024-11-07",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Market Research Report Compilation",
        description:
          "Compile research report on emerging trends and competitor analysis.",
        date: "2024-11-08",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Kavita",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Lead Prospect Outreach",
        description:
          "Initiate contact with new leads and provide initial information.",
        date: "2024-11-09",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Sales Data Entry",
        description:
          "Record recent sales transactions and update database with details.",
        date: "2024-11-10",
        category: "Sales",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Customer Issue Resolution",
        description:
          "Address escalated customer issues to resolve service-related concerns.",
        date: "2024-11-11",
        category: "Support",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Employee Onboarding Process",
        description:
          "Guide new hires through the initial onboarding procedures.",
        date: "2024-11-12",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Performance Review Scheduling",
        description:
          "Coordinate with managers to schedule employee performance reviews.",
        date: "2024-11-13",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
];




const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName:"Sharad"
  },
];

export const setLocalstorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalstorage = () => {
  const employee = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employee, admin };
};

// localStorage.clear()