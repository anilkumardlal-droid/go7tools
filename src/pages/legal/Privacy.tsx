
import {
  Box,
  Container,
  Typography,
  Stack,
  Link
} from '@mui/material';

import { Helmet } from 'react-helmet';

const email = 'info@go7.in';

const sections = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Welcome to GO7 Tools, accessible at https://go7.in. We respect your privacy and understand the importance of protecting information associated with your use of our website.',
      'This Privacy Policy explains what information may be collected or processed when you visit GO7 Tools, use our online utilities, interact with website features, or contact us.',
      'Our website provides a variety of online tools for general productivity and digital tasks. Depending on the tool or feature you use, different types of technical information or user-provided content may be involved.',
      'By accessing or using GO7 Tools, you acknowledge that you have read this Privacy Policy. We encourage you to review this page periodically for updates.'
    ]
  },
  {
    title: '2. Information We Collect',
    paragraphs: [
      'You can browse and use many general tools on GO7 Tools without creating an account or registering with us. We do not require you to provide personal information simply to visit the website.',
      'When you contact us by email, we may receive your email address, name if you include it, and any other information you voluntarily provide in your message or attachments.',
      'Our website hosting provider, security services, analytics providers, or other technical services may process certain technical information when you visit the website. Depending on the services in use, this information may include IP address, browser type, device information, operating system, referring page, requested URLs, and access timestamps.',
      'We use information available to us only for purposes such as operating the website, responding to enquiries, understanding technical problems, improving functionality, and maintaining website security, subject to applicable requirements.'
    ]
  },
  {
    title: '3. Information You Provide Voluntarily',
    paragraphs: [
      'You may choose to provide information when sending us an email, reporting a problem, submitting feedback, suggesting a feature, or making a business enquiry.',
      'The information you provide may include your email address, the content of your message, relevant website links, screenshots, or other details that you decide to share.',
      'We use this information to understand your request, communicate with you, investigate reported issues, and consider suggestions or enquiries.',
      'Please avoid including passwords, payment card details, account credentials, government identification numbers, or other sensitive personal information in your messages unless it is genuinely necessary and you have considered the risks.'
    ]
  },
  {
    title: '4. How Our Tools Process Your Data',
    paragraphs: [
      'GO7 Tools provides different types of online utilities, including tools that may process text, images, documents, PDF files, data, and other digital content.',
      'The method of processing can vary from one tool to another. Some tools may perform operations directly within your browser, while other tools may rely on external services, APIs, libraries, or resources.',
      'We do not make a blanket guarantee that every tool processes all information exclusively on your device or that no information is ever transmitted to another service.',
      'Before using a tool, please consider what information you are submitting and whether it contains confidential, sensitive, or personal data. Avoid processing information that you are not authorised to share.',
      'You are responsible for keeping original copies of important files and checking the results produced by a tool before using them.'
    ]
  },
  {
    title: '5. Cookies and Browser Storage',
    paragraphs: [
      'GO7 Tools or the services used to operate the website may use cookies, local storage, session storage, or similar technologies.',
      'These technologies may be used to support essential website functionality, remember user preferences, maintain selected settings, improve the browsing experience, and support certain third-party services.',
      'For example, the website may use browser storage to remember preferences such as a selected theme or language, where that functionality is implemented.',
      'Cookies and browser storage may also be used by third-party services integrated into the website. Their use is governed by the relevant provider’s policies and settings.',
      'You can manage or delete cookies through your browser settings. Disabling certain cookies or storage features may affect how some parts of the website work.'
    ]
  },
  {
    title: '6. Analytics and Website Performance',
    paragraphs: [
      'We may use analytics, performance monitoring, or similar technologies to understand how visitors interact with GO7 Tools and to identify opportunities to improve the website.',
      'Depending on the services implemented, analytics information may include visited pages, general usage patterns, browser and device details, referral sources, and technical events.',
      'This information may help us understand which tools are useful, identify errors, measure website performance, and improve navigation and usability.',
      'The actual information collected and the technologies used depend on the analytics or monitoring services active on the website.'
    ]
  },
  {
    title: '7. Third-Party Services',
    paragraphs: [
      'Some website features may depend on third-party services, software libraries, APIs, hosting providers, security services, content delivery networks, or other external resources.',
      'These providers may process technical information or other data as necessary to provide their services. Their processing activities are governed by their own privacy policies and terms.',
      'GO7 Tools does not control the privacy practices of independent third-party providers. We encourage users to review the relevant privacy policies when interacting with external services.',
      'The availability, functionality, and data practices of third-party services may change over time.'
    ]
  },
  {
    title: '8. Advertising and Promotional Services',
    paragraphs: [
      'GO7 Tools may display advertisements or promotional content provided by third-party advertising networks or partners.',
      'Advertising providers may use cookies, device information, browser information, or similar technologies to deliver, measure, or personalise advertisements, depending on their services and applicable settings.',
      'The information collected and processed by an advertising provider is subject to that provider’s own privacy policy and applicable choices or controls.',
      'GO7 Tools does not control all data processing carried out independently by advertising providers. We recommend reviewing their privacy policies for further information.'
    ]
  },
  {
    title: '9. How We Use Information',
    paragraphs: [
      'Information available to us may be used for the following purposes, where applicable:',
      'To operate, maintain, and provide access to GO7 Tools and its features.',
      'To respond to emails, support requests, feedback, and other enquiries.',
      'To identify, investigate, and resolve technical errors or security issues.',
      'To understand website usage and improve the performance, design, and usability of our services.',
      'To maintain website security, prevent misuse, and protect the website and its users.',
      'To comply with applicable legal obligations and respond to lawful requests where required.'
    ]
  },
  {
    title: '10. Data Sharing and Disclosure',
    paragraphs: [
      'We do not describe user information as being shared with every third party. However, certain information may be processed by service providers that help us operate, host, secure, analyse, or maintain the website.',
      'Information may also be disclosed where necessary to comply with applicable laws, respond to valid legal processes, protect legal rights, investigate misuse, or address security concerns.',
      'If you choose to access an external website, use a third-party integration, or interact with an advertisement, information may be handled directly by the relevant third party under its own policies.',
      'The extent of any information sharing depends on the services in use and the circumstances involved.'
    ]
  },
  {
    title: '11. Data Retention',
    paragraphs: [
      'We retain information only for as long as it is reasonably necessary for the purpose for which it was collected or processed, subject to applicable legal, security, and operational requirements.',
      'Emails and other communications may be retained for as long as needed to respond to enquiries, maintain relevant records, resolve issues, or meet legal obligations.',
      'Technical logs and information handled by hosting providers or other third-party services may be retained according to their own retention policies.',
      'Actual retention periods may vary depending on the type of information and the service involved.'
    ]
  },
  {
    title: '12. Data Security',
    paragraphs: [
      'We aim to maintain a reliable website and take reasonable steps to protect information handled through our services.',
      'However, no website, internet transmission, electronic storage method, or online service can be guaranteed to be completely secure.',
      'Users should keep their devices and browsers updated, use appropriate security measures, and avoid sharing confidential information unnecessarily.',
      'If you believe that you have identified a security issue involving GO7 Tools, please contact us with relevant details without publicly sharing sensitive information or exploiting the issue.'
    ]
  },
  {
    title: '13. Children’s Privacy',
    paragraphs: [
      'GO7 Tools is a general-purpose online utility platform and is not specifically directed at children.',
      'We do not knowingly request personal information from children simply to allow them to browse the general website.',
      'If you are a parent or guardian and believe that a child has provided personal information to us through email or another communication channel, you may contact us so that we can review the matter and take appropriate steps where required.'
    ]
  },
  {
    title: '14. External Websites and Links',
    paragraphs: [
      'Our website may contain links to external websites, services, or resources for convenience or additional information.',
      'We do not operate or control these external websites and are not responsible for their privacy policies, security practices, content, or data collection activities.',
      'When you follow an external link, your activity may be governed by the privacy policy and terms of the destination website. Please review those policies before providing personal information.'
    ]
  },
  {
    title: '15. Your Choices and Privacy Rights',
    paragraphs: [
      'Depending on your location and applicable laws, you may have certain rights regarding personal information, including the right to request access, correction, deletion, or other actions where applicable.',
      'You can manage cookies and certain browser storage settings through your browser. You may also choose what information you include when contacting us.',
      'If you have a privacy-related question or wish to make a request concerning information you have provided directly to us, please contact us at info@go7.in.',
      'We may need to verify your request and may be unable to fulfil certain requests where retention or processing is required or permitted by applicable law.'
    ]
  },
  {
    title: '16. International Data Processing',
    paragraphs: [
      'Some hosting providers, technical services, or third-party resources used by GO7 Tools may operate in locations outside your country or region.',
      'As a result, technical information or other data may be processed in different jurisdictions, subject to the arrangements and policies of the relevant service providers and applicable legal requirements.'
    ]
  },
  {
    title: '17. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes in our website, tools, third-party services, operational practices, or applicable legal requirements.',
      'Any revised version will be published on this page with an updated Last Updated date.',
      'We encourage visitors to review this page periodically to stay informed about how information may be handled when using GO7 Tools.'
    ]
  }
];

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | GO7 Tools - How We Handle Information</title>

        <meta
          name="description"
          content="Read the GO7 Tools Privacy Policy to understand information handling, browser storage, cookies, tool processing, analytics, advertising, third-party services, and your privacy choices."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://go7.in/privacy-policy"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Privacy Policy | GO7 Tools"
        />

        <meta
          property="og:description"
          content="Learn how GO7 Tools handles website information, browser data, cookies, tool processing, and privacy-related requests."
        />

        <meta
          property="og:url"
          content="https://go7.in/privacy-policy"
        />
      </Helmet>

      <Box
        component="main"
        sx={{
          py: { xs: 5, md: 8 }
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="overline"
              color="text.secondary"
              fontWeight={700}
              letterSpacing={2}
            >
              WEBSITE INFORMATION
            </Typography>

            <Typography
              variant="h3"
              component="h1"
              fontWeight={700}
              sx={{
                mt: 1,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '-0.03em'
              }}
            >
              Privacy Policy
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Last updated: November 9, 2026
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              At GO7 Tools, accessible at https://go7.in, we
              respect your privacy. This Privacy Policy explains
              how information may be collected, used, processed,
              and handled when you visit our website or use our
              online utilities.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85 }}
            >
              We believe users should have a clear understanding
              of how their information may be handled. Please
              read this policy carefully to understand our
              general approach to privacy and data protection.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 1.5 }}
            >
              Important Privacy Notice
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85 }}
            >
              Different tools on GO7 Tools may process information
              in different ways. Some operations may take place
              directly in your browser, while others may rely on
              external services. Please avoid entering sensitive
              or confidential information unless you understand
              how the specific tool works.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {sections.map((section) => (
              <Box
                component="section"
                key={section.title}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight={700}
                  sx={{
                    mb: 1.5,
                    fontSize: { xs: '1.2rem', md: '1.35rem' },
                    letterSpacing: '-0.015em'
                  }}
                >
                  {section.title}
                </Typography>

                <Stack spacing={1.75}>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <Typography
                      key={paragraphIndex}
                      color="text.secondary"
                      sx={{ lineHeight: 1.85 }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>

          <Box
            component="section"
            sx={{ mt: 5 }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{
                mb: 1.5,
                fontSize: { xs: '1.2rem', md: '1.35rem' }
              }}
            >
              18. Contact Us
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              If you have questions about this Privacy Policy,
              want clarification about how information may be
              handled, or wish to make a privacy-related request,
              please contact us using our official email address.
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              Privacy and General Enquiries
            </Typography>

            <Typography variant="h6" fontWeight={700}>
              <Link
                href={`mailto:${email}`}
                underline="hover"
                color="primary"
              >
                {email}
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
