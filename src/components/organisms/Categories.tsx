export default function Categories() {
  const isPending = true;

  if (isPending) {
    return (
      <section>
        <div data-testid="spinner-container">Loading...</div>
      </section>
    );
  }

  return <div>Categories</div>;
}
