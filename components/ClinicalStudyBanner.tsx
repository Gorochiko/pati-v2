export const ClinicalStudyBanner = () => {
  return (
    <section className="py-16 bg-im8-cream">
      <div className="im8-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground leading-tight">
            Clinically Proven.<br />
            <span className="text-primary">More Energy.</span>{' '}
            <span className="text-primary">A Healthier Gut.</span>*
          </h2>
          
          <div className="mt-8 flex justify-center">
            <img
              src="https://im8health.com/cdn/shop/files/clinical-studies-min.jpg?v=1724176766"
              alt="Clinical Studies"
              className="w-full max-w-3xl rounded-2xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
