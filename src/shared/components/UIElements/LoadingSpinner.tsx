function LoadingSpinner({ asOverlay }: { asOverlay: boolean }) {
  return (
    <div
      className={`${
        asOverlay &&
        'h-full w-full absolute top-0 left-0 flex justify-center items-center'
      }`}
    >
      <div className="loading-ring" />
    </div>
  );
}

export default LoadingSpinner;
