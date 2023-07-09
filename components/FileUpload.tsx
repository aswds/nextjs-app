import React, { useRef } from "react";

interface FileUploadProps extends React.PropsWithChildren {
  setFile: Function;
  accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.[0]);
  }
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type={"file"}
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
