import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { Helmet } from 'react-helmet';

const email = 'info@go7.in';

const sections = [
  {
    title: '1. Introduction and Acceptance of Terms',
    paragraphs: [
      'Welcome to GO7 Tools, accessible at https://go7.in. These Terms and Conditions govern your access to and use of our website, online utilities, features, and related services.',
      'By visiting, browsing, or using GO7 Tools, you acknowledge that you have read, understood, and agree to follow these Terms and Conditions, together with our applicable policies, including our Privacy Policy and Disclaimer.',
      'If you do not agree with these Terms, please discontinue using the website.',
      'These Terms apply to all visitors and users who access or use GO7 Tools, whether for personal, educational, or business purposes, subject to applicable law.',
    ],
  },
  {
    title: '2. Use of Our Website',
    paragraphs: [
      'GO7 Tools provides online utilities designed to help users perform general digital and productivity-related tasks. Available features may include image tools, PDF and document utilities, text processing tools, converters, developer utilities, calculators, and other online services.',
      'You agree to use the website only for lawful purposes and in a responsible manner. You must comply with all applicable laws, regulations, and legal requirements when accessing or using our services.',
      'You are responsible for ensuring that your use of the website is appropriate for your intended purpose and does not violate the rights of any other person or organisation.',
      'We reserve the right to modify website features, functionality, content, and available tools as the platform develops.',
    ],
  },
  {
    title: '3. Eligibility and Access to Our Services',
    paragraphs: [
      'GO7 Tools is generally accessible to visitors without requiring account creation or registration.',
      'You may use the available tools and features for lawful personal, educational, or business purposes, subject to these Terms and applicable laws.',
      'Certain tools or features may request information or files from you to perform their intended functions. You are responsible for ensuring that the information you provide is accurate and that you have the necessary rights and permissions to use it.',
      'You must not impersonate another person, misrepresent your identity, or provide false information when using our website.',
    ],
  },
  {
    title: '4. Acceptable Use',
    paragraphs: [
      'You agree not to misuse GO7 Tools or attempt to interfere with the normal operation, security, or availability of the website.',
      'In particular, you must not:',
      'Use the website for unlawful, fraudulent, deceptive, or harmful activities.',
      'Upload, transmit, or distribute malicious code, viruses, malware, or other harmful material.',
      'Attempt to gain unauthorised access to our servers, systems, databases, accounts, or infrastructure.',
      'Interfere with website functionality through automated abuse, excessive requests, scraping, or other disruptive activity.',
      'Attempt to bypass security measures, access restrictions, or technical limitations.',
      'Use our tools to violate intellectual property rights, privacy rights, or other legal rights of third parties.',
      'Use the website in a way that could damage, overload, disrupt, or negatively affect our services or other users.',
      'We may take reasonable action to restrict access or investigate suspected misuse where necessary and permitted by law.',
    ],
  },
  {
    title: '5. Tools, Features and Results',
    paragraphs: [
      'GO7 Tools provides utilities for general convenience and productivity. We aim to make these tools useful and accessible, but we do not guarantee that every tool will always operate without errors or produce results that meet every user’s expectations.',
      'Results may vary depending on user input, file formats, browser compatibility, device capabilities, software versions, technical limitations, and other factors.',
      'Some tools may not support every file type, format, size, or operation. Features may be changed, updated, restricted, or discontinued without prior notice.',
      'You are responsible for reviewing and verifying all outputs before relying on them, particularly when they are used for legal, financial, medical, business, educational, security, or safety-related purposes.',
      'For further information about tool accuracy and limitations, please review our Disclaimer.',
    ],
  },
  {
    title: '6. User Content and Uploaded Files',
    paragraphs: [
      'You may use certain tools to enter text, select files, upload documents, process images, or work with other digital content.',
      'You retain responsibility for the content you provide or process through GO7 Tools. You must ensure that you own the content or have the necessary rights, permissions, and legal authority to use it.',
      'You must not use our website to process, distribute, or share content that is unlawful, harmful, infringing, or otherwise prohibited under applicable law.',
      'You are responsible for maintaining backup copies of important files and verifying processed results before using or distributing them.',
      'The method of processing may differ between tools. Depending on the tool, some operations may occur in your browser, while others may rely on external services or resources. Please review the Privacy Policy and consider the sensitivity of your information before using a particular tool.',
    ],
  },
  {
    title: '7. Intellectual Property Rights',
    paragraphs: [
      'The GO7 Tools name, logo, website branding, original written content, visual design, website layout, and other original materials may be protected by applicable intellectual property laws.',
      'Unless otherwise stated, these materials may not be copied, reproduced, modified, republished, distributed, or commercially exploited without appropriate permission, except where permitted by law.',
      'You may access and use the website for lawful personal or business purposes in accordance with these Terms.',
      'Third-party software, libraries, icons, fonts, and other resources used on the website may belong to their respective owners and may be governed by separate licences or usage conditions.',
    ],
  },
  {
    title: '8. Third-Party Services and External Links',
    paragraphs: [
      'Certain tools or website features may depend on third-party services, APIs, software libraries, hosting providers, or other external resources.',
      'Our website may also contain links to third-party websites for additional information or convenience.',
      'External websites and services are operated independently and may have their own terms, privacy policies, security practices, and availability conditions.',
      'GO7 Tools does not control and is not responsible for the content, accuracy, availability, security, or practices of independent third-party services.',
      'Your use of third-party websites or services is at your own discretion and may be subject to their applicable terms and policies.',
    ],
  },
  {
    title: '9. Advertisements and Promotions',
    paragraphs: [
      'GO7 Tools may display advertisements, sponsored content, or promotional material from third-party advertising networks or partners.',
      'The appearance of an advertisement does not necessarily mean that GO7 Tools endorses, recommends, or guarantees the advertised product or service.',
      'Third-party advertisers may operate under their own terms and privacy policies. We are not responsible for their independent claims, products, services, transactions, or business practices.',
      'Any interaction, purchase, or agreement between you and an advertiser is your responsibility and may be governed by the advertiser’s own terms.',
    ],
  },
  {
    title: '10. Website Availability and Maintenance',
    paragraphs: [
      'We aim to keep GO7 Tools accessible and functioning properly. However, we do not guarantee that the website or every tool will always be available, uninterrupted, secure, or error-free.',
      'Access may be affected by scheduled maintenance, technical updates, server problems, network failures, browser incompatibility, third-party service interruptions, or circumstances beyond our reasonable control.',
      'We reserve the right to modify, suspend, restrict, or discontinue any part of the website or its features when necessary for maintenance, security, technical improvements, or operational reasons.',
      'We will make reasonable efforts to maintain the usefulness of the platform, but we are not obligated to provide every feature permanently.',
    ],
  },
  {
    title: '11. Privacy and Personal Information',
    paragraphs: [
      'Your use of GO7 Tools may involve the processing of technical information, browser data, cookies, preferences, or information that you voluntarily provide through communication channels.',
      'Our handling of information is explained in our Privacy Policy, which forms part of the information governing your use of the website.',
      'You are responsible for reviewing the Privacy Policy and understanding how different website features may process information before using them.',
      'You should avoid submitting sensitive or confidential information unless you understand the relevant processing method and are comfortable proceeding.',
    ],
  },
  {
    title: '12. Disclaimer of Warranties',
    paragraphs: [
      'GO7 Tools and its features are provided on an “as is” and “as available” basis, to the extent permitted by applicable law.',
      'We do not make guarantees that the website will meet every user’s requirements, operate without interruption, remain compatible with every device, or produce completely accurate results.',
      'We do not guarantee that all errors will be identified or corrected, that every feature will remain available, or that third-party services will continue to operate.',
      'You use the website and rely on its outputs at your own discretion and risk, subject to any rights that cannot legally be excluded.',
    ],
  },
  {
    title: '13. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by applicable law, GO7 Tools and its operators shall not be liable for indirect, incidental, consequential, special, or other losses arising from or relating to the use of, inability to use, or reliance on the website or its tools.',
      'This may include, where permitted by law, loss of data, loss of business, loss of profits, interruption of work, incorrect results, file processing issues, website downtime, or problems involving third-party services.',
      'You are responsible for determining whether a tool is appropriate for your intended purpose and for independently verifying important results.',
      'Nothing in these Terms is intended to exclude or restrict liability that cannot legally be excluded or restricted under applicable law.',
    ],
  },
  {
    title: '14. Indemnification',
    paragraphs: [
      'To the extent permitted by applicable law, you agree to be responsible for claims, liabilities, losses, damages, or reasonable expenses arising from your unlawful use of GO7 Tools, your violation of these Terms, or your infringement of the rights of another person.',
      'This section does not apply to the extent that such responsibility cannot legally be imposed on you under applicable law.',
    ],
  },
  {
    title: '15. Suspension and Termination',
    paragraphs: [
      'We may restrict, suspend, or terminate access to the website or particular features where we reasonably believe that a user has violated these Terms, misused the services, created a security risk, or engaged in unlawful activity.',
      'We may also restrict or discontinue features for maintenance, operational, technical, or business reasons.',
      'Where appropriate and reasonably possible, we may take steps to address an issue before restricting access. However, immediate action may be necessary in certain security or legal situations.',
    ],
  },
  {
    title: '16. Changes to These Terms',
    paragraphs: [
      'We may revise or update these Terms and Conditions from time to time to reflect changes in our website, tools, services, business operations, or applicable legal requirements.',
      'The latest version will be published on this page along with an updated Last Updated date.',
      'We encourage users to review this page periodically. Your continued use of GO7 Tools after updated Terms are published will be subject to the revised Terms, to the extent permitted by applicable law.',
    ],
  },
  {
    title: '17. Applicable Law and Jurisdiction',
    paragraphs: [
      'These Terms and your use of GO7 Tools shall be governed by the laws of India, to the extent applicable.',
      'Any dispute relating to these Terms or your use of GO7 Tools shall be subject to the jurisdiction of the courts competent under applicable Indian law.',
      'Nothing in this section is intended to override mandatory legal protections or consumer rights that apply to you.',
    ],
  },
  {
    title: '18. Severability',
    paragraphs: [
      'If any provision of these Terms is found to be invalid, unlawful, or unenforceable under applicable law, the remaining provisions will continue to apply to the extent legally permitted.',
      'The invalid or unenforceable provision will be interpreted or limited only to the extent necessary to make it enforceable, where legally possible.',
    ],
  },
];

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | GO7 Tools - Website Usage Terms</title>

        <meta
          name="description"
          content="Read the GO7 Tools Terms and Conditions covering website usage, acceptable use, online utilities, user responsibilities, intellectual property, third-party services, advertisements and liability."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://go7.in/terms-and-conditions"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Terms & Conditions | GO7 Tools"
        />

        <meta
          property="og:description"
          content="Review the terms and conditions for accessing and using GO7 Tools and its online utilities."
        />

        <meta
          property="og:url"
          content="https://go7.in/terms-and-conditions"
        />
      </Helmet>

      <Box
        component="main"
        sx={{
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={700}
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
              }}
            >
              Terms &amp; Conditions
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Last updated: November 10, 2026
            </Typography>

            <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
              Welcome to GO7 Tools. These Terms and Conditions explain the
              rules and responsibilities that apply when you access or use
              our website and online utilities.
            </Typography>

            <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
              Please read these Terms carefully before using our services. By
              continuing to browse or use GO7 Tools, you agree to follow the
              conditions described on this page, subject to applicable law.
            </Typography>
          </Stack>

          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{
                fontSize: { xs: '1.2rem', md: '1.35rem' },
                mb: 1.5,
              }}
            >
              Important Notice
            </Typography>

            <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
              You are responsible for how you use GO7 Tools, the information
              you submit, and the results generated by our utilities. Please
              use the website lawfully and review important outputs before
              relying on them.
            </Typography>
          </Box>

          <Stack spacing={{ xs: 3.5, md: 4 }}>
            {sections.map((section) => (
              <Box key={section.title}>
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight={700}
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.35rem' },
                    letterSpacing: '-0.015em',
                    lineHeight: 1.4,
                    mb: 1.75,
                  }}
                >
                  {section.title}
                </Typography>

                <Stack spacing={1.75}>
                  {section.paragraphs.map((paragraph, index) => (
                    <Typography
                      key={index}
                      color="text.secondary"
                      sx={{ lineHeight: 1.85 }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}

            <Box>
              <Typography
                variant="h5"
                component="h2"
                fontWeight={700}
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.35rem' },
                  letterSpacing: '-0.015em',
                  lineHeight: 1.4,
                  mb: 1.75,
                }}
              >
                19. Contact Information
              </Typography>

              <Stack spacing={1.75}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                  If you have questions, concerns, or requests relating to
                  these Terms and Conditions or your use of GO7 Tools, you can
                  contact us through our official email address.
                </Typography>

                <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                  Please include a clear subject line and a brief explanation
                  of your enquiry so that we can understand your message.
                </Typography>

                <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                  Official Contact Email:{' '}
                  <Link
                    href={`mailto:${email}`}
                    underline="hover"
                    color="primary"
                  >
                    {email}
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
