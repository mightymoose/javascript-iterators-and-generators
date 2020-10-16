<script>
    let value = 'waiting'

    fasync(function* () {
      const firstPromise = new Promise(
        (resolve) => setTimeout(resolve, 1000)
      );
      yield firstPromise; // Pass control to whatever is in charge of waiting

      value = 'just a little longer';

      const secondPromise = new Promise(
        (resolve) => setTimeout(resolve, 1000)
      );
      yield secondPromise; // Pass control to whatever is in charge of waiting

      value = 'done waiting!';
    });

    // I am in charge of waiting
    function fasync(f)  {
      const iterable = f();
      const firstYieldedPromise = iterable.next(); // Pass control back

      function waitForPromiseThenContinue(result) {
        if (!result.done) {

          // Wait for the promise to resolve
          result.value.then(
            () => {
              const nextYieldedPromise = iterable.next(); // Pass control back
              waitForPromiseThenContinue(nextYieldedPromise);
            }
          );
        }
      }

      return waitForPromiseThenContinue(firstYieldedPromise);
    }
</script>

{value}
