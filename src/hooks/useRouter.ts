const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, '', path);
    dispatchEvent(new Event('popstate'));
  };

  return { push };
};

export default useRouter;