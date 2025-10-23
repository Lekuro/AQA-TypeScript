export default {
    spec_dir: 'specs',
    spec_files: ['**/*[sS]pecs.?(m)js', '**/specs/**/*.[t]s?(x)'],
    helpers: ['helpers/**/*.?(m)js'],
    env: {
        stopSpecOnExpectationFailure: false,
        random: true,
        forbidDuplicateNames: true
    }
};
