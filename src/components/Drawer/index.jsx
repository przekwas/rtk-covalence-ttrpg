import React from 'react';

const Drawer = ({ children, side, open, onClickOverlay }) => {
	return (
		<div className="drawer" aria-expanded={open}>
			<input
				id="my-drawer"
				type="checkbox"
				className="drawer-toggle"
				checked={open}
				readOnly
			/>
			<div className="drawer-content">{children}</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer"
					className="drawer-overlay"
					onClick={onClickOverlay}></label>
				{side}
			</div>
		</div>
	);
};

export default Drawer;
