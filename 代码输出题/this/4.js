'use strict';

function a() {
    console.log(this);
}
a.call(null); // null
a.call(undefined); // undefined


