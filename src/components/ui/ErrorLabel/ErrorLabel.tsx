import React from "react";
import styles from "./ErrorLabel.module.css";

const TRY_AGAIN_LABEL = "Try again";

interface IErrorLabelProps {
  title: string;
  retryText?: string;
  onRetry?: () => void;
}

const ErrorLabel: React.FC<IErrorLabelProps> = ({
  title,
  retryText,
  onRetry,
}) => (
  <div className={styles.error_container}>
    <span>{title}</span>
    {onRetry ? (
      <span className={styles.retry_label} onClick={onRetry}>
        {retryText ?? TRY_AGAIN_LABEL}
      </span>
    ) : null}
  </div>
);

export default ErrorLabel;
