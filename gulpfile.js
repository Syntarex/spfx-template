"use strict";

const gulp = require("gulp");
const build = require("@microsoft/sp-build-web");

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
    var result = getTasks.call(build.rig);

    result.set("serve", result.get("serve-deprecated"));

    return result;
};

// force use of projects specified react version
build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        generatedConfiguration.externals = generatedConfiguration.externals.filter(
            (name) => !["react", "react-dom"].includes(name),
        );
        return generatedConfiguration;
    },
});

build.initialize(gulp);

gulp.task("version-sync", (done) => {
    // import gulp utilits to write error messages
    const gutil = require("gulp-util");

    // import file system utilities form nodeJS
    const fs = require("fs");

    // read package.json
    var pkgConfig = require("./package.json");

    // read configuration of web part solution file
    var pkgSolution = require("./config/package-solution.json");

    // log old version
    gutil.log("Old Version:\t" + pkgSolution.solution.version);

    // Generate new MS compliant version number
    var newVersionNumber = pkgConfig.version.split("-")[0] + ".0";

    // assign newly generated version number to web part version
    pkgSolution.solution.version = newVersionNumber;

    // log new version
    gutil.log("New Version:\t" + pkgSolution.solution.version);

    // write changed package-solution file
    fs.writeFile("./config/package-solution.json", JSON.stringify(pkgSolution, null, 4), () => {
        gutil.log("Successfully written new version!");
        done();
    });
});
