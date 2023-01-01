import { useRef, useState, useEffect, ChangeEvent } from 'react';

import Button from './Button';

function ImageUpload({
  id,
  center,
  onInput,
  errorText,
}: {
  id: string;
  center: boolean;
  errorText?: string;
  onInput: (id: string, value: File | undefined, isValid: boolean) => void;
}) {
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<FileReader>();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef<HTMLInputElement>(null);

  const pickedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files.length !== 0) {
      [pickedFile] = event.target.files;
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    onInput(id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current!.click();
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  return (
    <div className="form-control">
      <input
        id={id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div
        className={`${
          center && 'flex justify-center items-center flex-col mb-4'
        }`}
      >
        <div className="w-56 h-56 border-solid border-[1px] border-body flex justify-center items-center text-center mb-4">
          {previewUrl && (
            <img
              className="w-full h-full object-cover"
              src={previewUrl.result as string}
              alt="Preview"
            />
          )}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button className="mb-4" type="button" onClick={pickImageHandler}>
          Pick Image
        </Button>
      </div>
      {!isValid && (
        <div className="w-full flex justify-center my-4">
          <p className="text-red mb-1">{errorText}</p>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
