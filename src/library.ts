/*!
 * ${copyright}
 */

import IconPool from "sap/ui/core/IconPool";
import Lib from "sap/ui/core/Lib";

// library dependencies must also be imported here
import "sap/ui/core/library";

/**
 * Initialization Code and shared classes of library fontawesome.icons.lib.
 */

// delegate further initialization of this library to the Core
const thisLib: { [key: string]: unknown } = Lib.init({
	name: "fontawesome.icons.lib",
	version: "${version}",
	dependencies: [
		// keep in sync with the ui5.yaml and .library files
		"sap.ui.core",
		"sap.m",
	],
	types: [],
	interfaces: [],
	controls: ["fontawesome.icons.lib.Example"],
	elements: [],
	noLibraryCSS: false, // if no CSS is provided, you can disable the library.css load here,
}) as { [key: string]: unknown };

IconPool.registerFont({
	collectionName: "fa-solid",
	fontFamily: "fa-solid",
	fontURI: sap.ui.require.toUrl("fontawesome/icons/lib/fonts/fa-solid"),
	lazy: false,
});

IconPool.registerFont({
	collectionName: "fa-brands",
	fontFamily: "fa-brands",
	fontURI: sap.ui.require.toUrl("fontawesome/icons/lib/fonts/fa-brands"),
	lazy: false,
});

IconPool.registerFont({
	collectionName: "fa-regular",
	fontFamily: "fa-regular",
	fontURI: sap.ui.require.toUrl("fontawesome/icons/lib/fonts/fa-regular"),
	lazy: false,
});

// export the library namespace
export default thisLib;
