wrapGenerator.mark(range);

function range(max, step) {
  var count, i;

  return wrapGenerator(function range$($ctx0) {
    while (1) switch ($ctx0.prev = $ctx0.next) {
    case 0:
      count = 0;
      step = step || 1;
      i = 0;
    case 3:
      if (!(i < max)) {
        $ctx0.next = 10;
        break;
      }

      count++;
      $ctx0.next = 7;
      return i;
    case 7:
      i += step;
      $ctx0.next = 3;
      break;
    case 10:
      return $ctx0.abrupt("return", count);
    case 11:
    case "end":
      return $ctx0.stop();
    }
  }, this);
}

var gen = range(20, 3), info;

while (!(info = gen.next()).done) {
  console.log(info.value);
}

console.log("steps taken: " + info.value);
