let currentCount;

module.exports.set = ((count) => currentCount = count);
module.exports.add = ((count) => currentCount += count);
module.exports.sub = ((count) => currentCount -= count);
module.exports.mult = ((count) => currentCount *= count);
module.exports.div = ((count) => currentCount /= count);