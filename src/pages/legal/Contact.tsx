import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
} from '@mui/material';

import { Helmet } from 'react-helmet';

const email = 'info@go7.in';

const contactTopics = [
  {
    title: 'General Enquiries',
    description:
      'If you have general questions about GO7 Tools, our website, available online utilities, or how to use a particular feature, you can contact us by email. We will do our best to provide clear and helpful information.',
  },
  {
    title: 'Technical Support',
    description:
      'If a tool is not working as expected, produces an unexpected result, or displays an error, please let us know. Include the name of the tool, the page URL, the steps you followed, and a description of the issue so that we can understand the problem.',
  },
  {
    title: 'Feedback and Suggestions',
    description:
      'We welcome feedback from people who use GO7 Tools. Your suggestions can help us understand what works well, what could be improved, and how we can make the website easier and more convenient to use.',
  },
  {
    title: 'Feature Requests',
    description:
      'Have an idea for a new online tool or an improvement to an existing feature? You can share your suggestion with us. We review feature requests and consider them when planning future website improvements. Please note that submitting a request does not guarantee that the feature will be developed.',
  },
  {
    title: 'Business and Collaboration Enquiries',
    description:
      'For business-related questions, partnership proposals, collaboration opportunities, promotional enquiries, or other professional communication related to GO7 Tools, please contact us through our official email address.',
  },
  {
    title: 'Website Content and Other Issues',
    description:
      'If you notice an incorrect description, a broken link, outdated information, an accessibility issue, or any other problem on the website, please send us the relevant page URL and explain what needs attention.',
  },
];

const emailGuidelines = [
  {
    title: 'Use a Clear Subject Line',
    description:
      'Choose a subject that briefly explains the purpose of your email. For example: Technical Support, Feature Request, Website Feedback, or Business Enquiry.',
  },
  {
    title: 'Mention the Relevant Tool or Page',
    description:
      'If your enquiry is related to a particular tool, include its name and the complete page URL. This helps us identify the relevant section of the website.',
  },
  {
    title: 'Explain the Issue Clearly',
    description:
      'Describe what you were trying to do, what happened, and what result you expected. If possible, mention the steps required to reproduce the issue.',
  },
  {
    title: 'Include Device and Browser Details',
    description:
      'For technical problems, mentioning your device type, operating system, and browser can help us better understand the issue.',
  },
  {
    title: 'Attach Screenshots When Helpful',
    description:
      'If an error message or display problem appears on your screen, a screenshot can help explain the issue more clearly. Make sure it does not contain private or sensitive information.',
  },
];

const beforeContacting = [
  'Refresh the page and try again.',
  'Check that your internet connection is working properly.',
  'Make sure you are using an updated web browser.',
  'Try opening the tool in a new browser tab.',
  'If the issue continues, send us an email with the relevant details.',
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact GO7 Tools | Support, Feedback and Enquiries</title>

        <meta
          name="description"
          content="Contact GO7 Tools for technical support, general enquiries, feedback, feature requests, business opportunities, and website assistance."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://go7.in/contact"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Contact GO7 Tools | Support and Enquiries"
        />

        <meta
          property="og:description"
          content="Get in touch with GO7 Tools for assistance, feedback, suggestions, technical support, and business enquiries."
        />

        <meta
          property="og:url"
          content="https://go7.in/contact"
        />
      </Helmet>

      <Box
        component="main"
        sx={{
          minHeight: '70vh',
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="md">

          {/* Page Introduction */}

          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="overline"
              color="text.secondary"
              fontWeight={600}
              letterSpacing={1.5}
            >
              CONTACT US
            </Typography>

            <Typography
              variant="h3"
              component="h1"
              fontWeight={700}
              sx={{
                mt: 1,
                mb: 2,
                letterSpacing: '-0.5px',
              }}
            >
              Contact GO7 Tools
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              We appreciate your interest in GO7 Tools. Whether you
              have a question, need assistance with an online tool,
              want to share feedback, or wish to discuss a business
              opportunity, we are happy to hear from you.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              Our goal is to make your experience with GO7 Tools
              simple, useful, and convenient. Your questions,
              suggestions, and feedback help us understand the needs
              of our visitors and identify opportunities to improve
              the website.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85 }}
            >
              Please read the information below to understand how
              you can contact us and what details you should include
              in your message.
            </Typography>
          </Box>

          {/* Email Contact */}

          <Box
            component="section"
            sx={{ mb: { xs: 5, md: 7 } }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Contact Us by Email
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              The easiest way to contact GO7 Tools is through our
              official email address. You can use this address for
              general questions, technical support, feedback,
              suggestions, business enquiries, and other
              website-related communication.
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              Official Contact Email
            </Typography>

            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 1, wordBreak: 'break-word' }}
            >
              <Link
                href={`mailto:${email}`}
                underline="hover"
                color="primary"
              >
                {email}
              </Link>
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85 }}
            >
              Select the email address above to open your default
              email application and send us a message.
            </Typography>
          </Box>

          {/* Response Time */}

          <Box
            component="section"
            sx={{ mb: { xs: 5, md: 7 } }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Our Email Response Time
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              We understand that receiving a timely response is
              important. We aim to respond to emails within
              <Box
                component="strong"
                sx={{ color: 'text.primary', fontWeight: 700 }}
              >
                {' '}24–48 business hours{' '}
              </Box>
              after receiving your message.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              Business hours refer to normal working hours on
              business days. Weekends, public holidays, and other
              non-working days may affect the response time.
              Therefore, if you send an email outside normal
              business hours or during a holiday, our response may
              take longer.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              The actual response time may also depend on the
              nature of your enquiry, the amount of information
              required, and the number of messages we are handling
              at that time.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85 }}
            >
              We appreciate your patience and understanding while
              we review your message and prepare a helpful response.
              Sending multiple emails about the same enquiry may
              make it harder to keep the conversation organised,
              so we recommend replying to your original email
              whenever possible.
            </Typography>
          </Box>

          {/* Contact Topics */}

          <Box
            component="section"
            sx={{ mb: { xs: 5, md: 7 } }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              How Can We Help You?
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 3 }}
            >
              You can contact us for a variety of reasons. To help
              us direct your message appropriately, please choose
              a clear subject and explain the purpose of your
              enquiry.
            </Typography>

            <Stack spacing={3}>
              {contactTopics.map((topic, index) => (
                <Box key={topic.title}>
                  <Typography
                    variant="h6"
                    component="h3"
                    fontWeight={600}
                    sx={{ mb: 1 }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: 'text.secondary',
                        mr: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </Box>

                    {topic.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.85 }}
                  >
                    {topic.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Email Guidelines */}

          <Box
            component="section"
            sx={{ mb: { xs: 5, md: 7 } }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              What Information Should You Include in Your Email?
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 3 }}
            >
              A clear and complete email helps us understand your
              enquiry and respond more effectively. We recommend
              including the following information whenever it is
              relevant:
            </Typography>

            <Stack spacing={3}>
              {emailGuidelines.map((item, index) => (
                <Box key={item.title}>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    fontWeight={600}
                    sx={{ mb: 0.5 }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: 'text.secondary',
                        mr: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </Box>

                    {item.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.85 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Before Contacting */}

          <Box
            component="section"
            sx={{ mb: { xs: 5, md: 7 } }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Before Contacting Technical Support
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 3 }}
            >
              If you are experiencing a problem with one of our
              online tools, a few simple checks may help identify
              or resolve the issue.
            </Typography>

            <Stack spacing={1.5}>
              {beforeContacting.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                  }}
                >
                  <Typography
                    color="text.secondary"
                    fontWeight={600}
                    sx={{ minWidth: 22 }}
                  >
                    {index + 1}.
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mt: 3 }}
            >
              If the problem continues after these checks, please
              contact us with a detailed explanation. We will
              review the information and consider the appropriate
              next steps.
            </Typography>
          </Box>

          {/* Privacy and Safety */}

          <Box
            component="section"
            sx={{ mb: { xs: 5, md: 7 } }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Protect Your Personal Information
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              When contacting us, please share only the information
              necessary to understand your question or issue.
              Avoid including passwords, payment card details,
              account credentials, private identification numbers,
              or other sensitive personal information in your email.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85 }}
            >
              If you attach screenshots or documents, review them
              before sending to make sure they do not expose
              confidential information. We encourage visitors to
              use reasonable care when sharing information online.
            </Typography>
          </Box>

          {/* Communication Policy */}

          <Box
            component="section"
            sx={{ mb: { xs: 5, md: 7 } }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Our Communication and Support Approach
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              We aim to communicate in a clear, respectful, and
              helpful manner. Every genuine enquiry is important,
              and we make reasonable efforts to understand the
              information provided before responding.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              Please remember that GO7 Tools is an online utility
              platform. Our ability to provide assistance may
              depend on the nature of the issue, available
              information, and whether the matter relates directly
              to features provided on our website.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85 }}
            >
              While we carefully consider feedback and suggestions,
              we cannot guarantee that every requested feature,
              change, or improvement will be implemented. Some
              enquiries may require additional review before we
              can provide a complete response.
            </Typography>
          </Box>

          {/* Thank You */}

          <Box
            component="section"
            sx={{ mb: 4 }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={700}
              sx={{ mb: 2 }}
            >
              Thank You for Reaching Out
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85, mb: 2 }}
            >
              Thank you for visiting GO7 Tools and taking the time
              to contact us. Your interest, feedback, and
              suggestions are valuable in helping us improve the
              website and make our online utilities more useful
              for everyone.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.85 }}
            >
              We look forward to hearing from you. For all general
              questions, support requests, suggestions, and other
              enquiries, please write to us at:
            </Typography>

            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mt: 2, wordBreak: 'break-word' }}
            >
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