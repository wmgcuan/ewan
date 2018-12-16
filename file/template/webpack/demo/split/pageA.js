// import * as _ from 'lodash'
// var page = 'subpageA'

// if (page === 'subpageA') {
//     import(/* webpackChunkName:'subpageA' */'./subPageA')
//         .then(function(subPageA) {
//             console.log(subPageA)
//         })
// } else if (page === 'subPageB') {
//     import(/* webpackChunkName:'subpageB' */'./subPageB')
//         .then(function(subPageB) {
//             console.log(subPageB)
//         })
// }
require.include('./moduleA')

var page = '1'
if (page === '1') {
    import(/* webpackChunkName:'subpageA' */'./subPageA')
        .then(function (subPageA) {
            console.log(subPageA)
        })
}
if (page === '2') {
    import(/* webpackChunkName:'subpageB' */'./subPageB')
        .then(function (subPageB) {
            console.log(subPageB)
        })
}

require.ensure(['lodash'], function () {
    var _ = require('lodash')
    _.join([1, 2, 3], '4')
}, 'vendor')

export default 'pageA'