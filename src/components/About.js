import React from 'react'

export default function About(props) {
	const aboutStyle = {
        backgroundColor: props.mode === 'dark' ? '#23272b' : '#fff',
        color: props.mode === 'dark' ? '#f8f9fa' : '#212529',
        borderRadius: "8px",
        padding: "20px"
    };
  return (
   <>
   <section className="py-5" >
	<div className="container" style={aboutStyle}>
		<div className="row gx-4 align-items-center justify-content-between">
			<div className="col-md-5 order-2 order-md-1">
				<div className="mt-5 mt-md-0">
					<span className="text-muted">Our Story</span>
					<h2 className="display-5 fw-bold">About Us</h2>
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
				</div>
			</div>
			{/*<div className="col-md-6 offset-md-1 order-1 order-md-2" >
				<div className="row gx-2 gx-lg-3">
					<div className="col-6">
						<div className="mb-2"><img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt='img1'/></div>
					</div>
					<div className="col-6">
						<div className="mb-2"><img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt='img2'/></div>
					</div>
					<div className="col-6">
						<div className="mb-2"><img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt='img3'/></div>
					</div>
					<div className="col-6">
						<div className="mb-2"><img className="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" alt='img4'/></div>
					</div>
				</div>
			</div>*/}
		</div>
	</div>
</section>
   </>
  )}
