import { RiSearch2Line } from "@remixicon/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Label } from "@radix-ui/react-label";

interface SearchFormProps {
  query: string | null;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchForm({ query, handleSearchChange }: SearchFormProps) {
  return (
    <form className="max-w-lg w-full" method="get">
      <InputGroup>
        <Label className="hidden" htmlFor="q">
          Search
        </Label>
        <InputGroupInput
          placeholder="Search..."
          id="q"
          name="q"
          value={query ?? ""}
          onChange={handleSearchChange}
        />
        <InputGroupAddon>
          <RiSearch2Line className="w-5 h-5" />
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
