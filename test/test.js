var mochas = require("spawn-mochas");

mochas([
	"../zones/zones-basics-test.js",
	"../zones/zones-mutations-test.js",
	"../zones/zones-steal-test.js",
	"../zones/zones-canjs-test.js",
	"../zones/zones-donejs-test.js",
	"../zones/canjs/globals-test.js",
	"async_test.js",
	"cookie_test.js",
	"plainjs_test.js",
	"progressive_test.js",
	"test_envs.js",
	"xhr_test.js",
	"auth-cookie_test.js",
	"auth-cookie-failed-domain_test.js",
	"import_empty_test.js",
	"timeout_test.js",
	"startup_err_test.js",
	"fixture_test.js",
	"stealdone_test.js",
	"define_map_test.js",
	"define_map_status_test.js",
	"define_test.js",
	"live-reload_test.js",
	"leak_test.js",
	"incremental_test.js",
	"incremental_plain_test.js",
	"incremental_prog_test.js",
	"error_handling_test.js"
], __dirname);
