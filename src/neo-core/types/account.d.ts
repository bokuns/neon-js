interface ContractParameter {
  name: string;
  type: string;
}

interface Contract {
  script: string;
  parameters: ContractParameter[];
  deployed: boolean;
}

export interface Account {
  address: string;
  label: string | null;
  isDefault: boolean;
  lock: boolean;
  key: string;
  contract: Contract;
  extra: string | null;
}
