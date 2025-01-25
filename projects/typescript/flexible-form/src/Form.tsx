import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

type FormHandle = {
  clear: () => void;
};

type FormTypes = ComponentPropsWithoutRef<"form"> & {
  onSubmit: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormTypes>(function Form(
  { children, onSubmit, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
