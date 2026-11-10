
import {
  Box,
  Container,
  Typography,
  Stack,
  Link
} from '@mui/material';

import { Helmet } from 'react-helmet';

const sections = [
  {
    title: 'Who We Are',
    paragraphs: [
      'GO7 Tools is an independent online tools platform created to make everyday digital tasks simpler, faster, and more convenient. Our platform brings together a wide collection of useful utilities that help people perform common digital tasks from one convenient destination.',
      'We believe that useful online tools should be easy to find and simple to use. That is why GO7 Tools focuses on providing an organized collection of utilities with a clean interface and straightforward navigation.',
      'Whether you are a student, professional, developer, business owner, content creator, or an everyday internet user, GO7 Tools aims to provide practical solutions for your digital needs.'
    ]
  },
  {
    title: 'What We Offer',
    paragraphs: [
      'GO7 Tools provides a growing collection of online utilities covering different areas of everyday digital work. Our tools are organized into categories so users can easily discover utilities according to their requirements.'
    ]
  },
  {
    title: 'Our Mission',
    paragraphs: [
      'Our mission is to make useful digital utilities accessible and convenient for everyone. We want to reduce the complexity of everyday online tasks by bringing practical tools together in one place.',
      'We aim to create an experience where users can find the tools they need, understand how to use them, and complete their tasks without unnecessary complications.',
      'We believe that technology should save time, improve productivity, and make everyday activities easier.'
    ]
  },
  {
    title: 'Our Vision',
    paragraphs: [
      'Our vision is to develop GO7 Tools into a trusted and useful destination for everyday online utilities. We want to continuously expand our collection, improve the user experience, and make digital tools more accessible to people around the world.',
      'We see GO7 Tools as an evolving platform that grows with changing user needs and technology. Our long-term focus is on usefulness, simplicity, accessibility, and continuous improvement.'
    ]
  },
  {
    title: 'Designed for Different Users',
    paragraphs: [
      'Different people use online tools for different reasons. GO7 Tools is designed to serve a broad range of users and everyday requirements.',
      'Students may use online utilities for documents, text, calculations, and study-related tasks. Professionals may find tools useful for handling files, data, and routine work. Developers may explore utilities for JSON, XML, formatting, and data conversion. Content creators may use image and text utilities as part of their workflow.',
      'Our aim is to make these utilities approachable for beginners while remaining useful to people who regularly work with digital content.'
    ]
  },
  {
    title: 'Simple, Clean and Convenient Experience',
    paragraphs: [
      'A useful tool should not be difficult to find or complicated to operate. We focus on a clean layout, organized categories, readable content, and simple navigation.',
      'GO7 Tools is designed to be accessible across desktop computers, laptops, tablets, and mobile devices. We also provide light and dark appearance options to support different viewing preferences.',
      'Our platform includes multiple language options so that users can explore the experience in a language they are comfortable with.'
    ]
  },
  {
    title: 'Privacy and Responsible Use',
    paragraphs: [
      'We understand that privacy is an important consideration when using online tools. Different utilities may handle information in different ways depending on their functionality and technical requirements.',
      'Some operations may be performed directly within your browser, while other tools may use external services or processing methods. Users should review the relevant tool experience and our Privacy Policy to understand how information may be handled.',
      'We encourage everyone to avoid submitting confidential, sensitive, or personal information to online tools unless they have reviewed how that particular tool processes information.'
    ]
  },
  {
    title: 'Quality and Continuous Improvement',
    paragraphs: [
      'We believe that building a useful platform is an ongoing process. We aim to improve the usability, organization, accessibility, and performance of GO7 Tools over time.',
      'We value user feedback because it helps us understand real-world requirements. Suggestions, technical issue reports, and feature requests can help us identify opportunities to improve existing tools and introduce useful additions.',
      'Our goal is to keep making the platform more practical and convenient for everyday use.'
    ]
  },
  {
    title: 'Our Commitment to Users',
    paragraphs: [
      'We aim to provide a straightforward online experience with useful utilities, clear navigation, and accessible information. We want visitors to spend less time searching for solutions and more time completing their actual tasks.',
      'We also recognize that tools and technology continue to change. We will keep exploring ways to make GO7 Tools more useful as user expectations and digital requirements evolve.'
    ]
  }
];

const categories = [
  {
    title: 'Image Tools',
    description:
      'Utilities for common image-related tasks such as image conversion, resizing, compression, and editing.'
  },
  {
    title: 'Text Tools',
    description:
      'Tools for formatting, transforming, analyzing, and working with text.'
  },
  {
    title: 'PDF and Document Tools',
    description:
      'Utilities for handling common PDF and document-related tasks.'
  },
  {
    title: 'Developer Tools',
    description:
      'Helpful utilities for working with JSON, XML, formatting, and other development-related data.'
  },
  {
    title: 'Data and CSV Tools',
    description:
      'Tools for organizing, processing, and converting structured data.'
  },
  {
    title: 'Converters',
    description:
      'Utilities for converting supported files and information between different formats.'
  },
  {
    title: 'Numbers and Calculators',
    description:
      'Tools for calculations, number operations, and other everyday mathematical tasks.'
  },
  {
    title: 'More Online Utilities',
    description:
      'Additional tools for different digital activities and everyday requirements.'
  }
];

const benefits = [
  'A growing collection of practical online utilities',
  'Tools organized into convenient categories',
  'Clean and user-friendly interface',
  'Designed for desktop, tablet, and mobile devices',
  'Light and dark appearance options',
  'Multiple language options',
  'Convenient access through a web browser',
  'No separate desktop application required',
  'Ongoing platform improvements'
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About GO7 Tools | Our Mission, Vision and Online Utilities</title>

        <meta
          name="description"
          content="Learn about GO7 Tools, our mission, vision, online utilities, user experience, privacy approach, and commitment to making everyday digital tasks easier."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://go7.in/about"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="About GO7 Tools | Our Mission and Vision"
        />

        <meta
          property="og:description"
          content="Discover GO7 Tools, an online destination for useful utilities that simplify everyday digital tasks."
        />

        <meta
          property="og:url"
          content="https://go7.in/about"
        />
      </Helmet>

      <Container maxWidth="md">
        <Box
          component="main"
          sx={{
            py: { xs: 4, md: 7 }
          }}
        >
          {/* Introduction */}

          <Stack spacing={2} sx={{ mb: 6 }}>
            <Typography
              variant="overline"
              color="text.secondary"
              fontWeight={600}
              letterSpacing={1.5}
            >
              ABOUT US
            </Typography>

            <Typography
              component="h1"
              variant="h3"
              fontWeight={700}
            >
              About GO7 Tools
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
            >
              Useful Tools. Simple Solutions.
            </Typography>

            <Typography paragraph>
              Welcome to <strong>GO7 Tools</strong>, your destination for useful,
              simple, and practical online tools. We believe everyday digital
              tasks should be easier, more accessible, and more convenient for
              everyone.
            </Typography>

            <Typography paragraph>
              From working with images and documents to processing text, data,
              and other digital content, GO7 Tools brings a variety of online
              utilities together in one place.
            </Typography>

            <Typography paragraph>
              Our purpose is simple: help people complete everyday digital
              tasks through convenient online utilities, without unnecessary
              complexity.
            </Typography>
          </Stack>

          {/* Main Sections */}

          <Stack spacing={5}>
            {sections.map((section) => (
              <Box
                key={section.title}
                component="section"
              >
                <Typography
                  component="h2"
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 2 }}
                >
                  {section.title}
                </Typography>

                <Stack spacing={2}>
                  {section.paragraphs.map((paragraph, index) => (
                    <Typography
                      key={index}
                      color="text.secondary"
                      paragraph
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>

                {section.title === 'What We Offer' && (
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr'
                      },
                      columnGap: 4,
                      rowGap: 3,
                      mt: 3
                    }}
                  >
                    {categories.map((category, index) => (
                      <Box key={category.title}>
                        <Typography
                          fontWeight={700}
                          sx={{ mb: 1 }}
                        >
                          {String(index + 1).padStart(2, '0')}. {category.title}
                        </Typography>

                        <Typography color="text.secondary">
                          {category.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Stack>

          {/* Benefits */}

          <Box
            component="section"
            sx={{ mt: 6 }}
          >
            <Typography
              component="h2"
              variant="h5"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Why Choose GO7 Tools?
            </Typography>

            <Typography paragraph color="text.secondary">
              We want to make your online experience simple and productive.
              Here are some of the features and benefits you can explore on
              our platform:
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {benefits.map((benefit, index) => (
                <Box
                  key={benefit}
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 2
                  }}
                >
                  <Typography
                    color="text.secondary"
                    sx={{ minWidth: 24 }}
                  >
                    {index + 1}.
                  </Typography>

                  <Typography color="text.secondary">
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Contact */}

          <Box
            component="section"
            sx={{ mt: 6 }}
          >
            <Typography
              component="h2"
              variant="h5"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Get in Touch
            </Typography>

            <Typography paragraph color="text.secondary">
              Your feedback is important to us. If you have a question, notice
              a technical issue, want to suggest a new feature, or simply want
              to share your experience, we welcome you to contact us.
            </Typography>

            <Typography>
              Email:{' '}
              <Link href="mailto:info@go7.in" underline="hover">
                info@go7.in
              </Link>
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>
              We appreciate your suggestions and feedback.
            </Typography>
          </Box>

          {/* Closing */}

          <Box
            component="section"
            sx={{
              textAlign: 'center',
              py: { xs: 4, md: 6 },
              mt: 5,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            <Typography
              component="h2"
              variant="h5"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Thank You for Choosing GO7 Tools
            </Typography>

            <Typography color="text.secondary" paragraph>
              Thank you for visiting GO7 Tools and being part of our growing
              community. We appreciate your time, trust, and feedback. We will
              continue working towards making useful online tools easier to
              discover and use.
            </Typography>

            <Typography fontWeight={600} sx={{ mt: 2 }}>
              Useful Tools. Simple Solutions.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
