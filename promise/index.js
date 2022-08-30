async function foo() {
	const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
	const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
	const results = [await p1, await p2]; // 不推荐使用这种方式，请使用 Promise.all 或者 Promise.allSettled
}
foo().catch(() => {}); // 捕捉所有的错误...
