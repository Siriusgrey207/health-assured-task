import { useResources } from "../../hooks/useResources";

export default function Categories() {
  const { isLoading, error, isError, data } = useResources();

  if (isLoading) {
    return (
      <section>
        <div data-testid="spinner-container">Loading...</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section data-testid="error-container">
        <h6>There was an error</h6>
      </section>
    );
  }

  return (
    <section data-testid="categories-container">
      Categories should load here
    </section>
  );
}
