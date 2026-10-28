export default function ResumeButton({ className = "" }) {
  return (
    <a
      className={`resume-button ${className}`.trim()}
      href="/resume.pdf"
      download="Elluri-Mahesh-Resume.pdf"
      aria-label="Download resume as PDF"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
      Download Resume
    </a>
  );
}