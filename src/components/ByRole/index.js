import React from 'react';

const ByRole = () => {
	return (
		<>
			<h2>By Role</h2>
			<main aria-hidden='true'>
				<button>Open dialog</button>
			</main>
			<div role='dialog'>
				<button>Close dialog</button>
			</div>
			<div role='tablist'>
				<button
					role='tab'
					aria-selected='true'
				>
					Native
				</button>
				<button
					role='tab'
					aria-selected='false'
				>
					React
				</button>
				<button
					role='tab'
					aria-selected='false'
				>
					Cypress
				</button>
			</div>
			<section>
				<button
					role='checkbox'
					aria-checked='true'
				>
					Sugar
				</button>
				<button
					role='checkbox'
					aria-checked='false'
				>
					Gummy bears
				</button>
				<button
					role='checkbox'
					aria-checked='false'
				>
					Whipped cream
				</button>
			</section>
			<nav>
				<a
					href='current/page'
					aria-current='true'
				>
					current
				</a>
				<a href='another/page'>another</a>
			</nav>
		</>
	);
};

export default ByRole;
