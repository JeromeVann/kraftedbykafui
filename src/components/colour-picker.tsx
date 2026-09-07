import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const customOption = "Bespoke / Custom";

const colourOptions = [
  {
    name: "Pearl Ivory",
    description: "A soft, luminous warm white",
    swatch: "oklch(0.95 0.025 88)",
  },
  {
    name: "Champagne Gold",
    description: "Candlelit gold with a satin glow",
    swatch: "linear-gradient(135deg, oklch(0.82 0.08 82), oklch(0.67 0.09 75))",
  },
  {
    name: "Blush Rose",
    description: "A romantic powder pink",
    swatch: "oklch(0.82 0.075 12)",
  },
  {
    name: "Dusty Mauve",
    description: "A vintage muted rose-purple",
    swatch: "oklch(0.62 0.075 345)",
  },
  {
    name: "Sage Mist",
    description: "A gentle botanical neutral",
    swatch: "oklch(0.72 0.06 145)",
  },
  {
    name: "Emerald Velvet",
    description: "A rich, dramatic jewel green",
    swatch: "oklch(0.39 0.09 165)",
  },
  {
    name: "Bordeaux Wine",
    description: "A deep ceremonial berry red",
    swatch: "oklch(0.4 0.13 12)",
  },
  {
    name: "Midnight Navy",
    description: "A timeless, inky evening blue",
    swatch: "oklch(0.31 0.07 255)",
  },
  {
    name: "Royal Plum",
    description: "A regal aubergine purple",
    swatch: "oklch(0.4 0.1 320)",
  },
  {
    name: "Terracotta Silk",
    description: "A warm, burnished coral",
    swatch: "oklch(0.63 0.11 40)",
  },
  {
    name: "Cocoa Truffle",
    description: "A luxurious espresso brown",
    swatch: "oklch(0.4 0.05 55)",
  },
] as const;

const bespokeSwatch =
  "conic-gradient(from 45deg, oklch(0.82 0.075 12), oklch(0.82 0.08 82), oklch(0.72 0.06 145), oklch(0.4 0.1 320), oklch(0.82 0.075 12))";

type ColourPickerProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ColourPicker({ value, onChange }: ColourPickerProps) {
  const matchingOption = colourOptions.find((option) => option.name === value);
  const [choice, setChoice] = useState(value ? (matchingOption?.name ?? customOption) : "");
  const [customColour, setCustomColour] = useState(matchingOption ? "" : value);
  const selected = colourOptions.find((option) => option.name === choice);
  const selectedSwatch = choice === customOption ? bespokeSwatch : selected?.swatch;

  const chooseColour = (nextChoice: string) => {
    setChoice(nextChoice);
    onChange(nextChoice === customOption ? customColour : nextChoice);
  };

  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <label
            className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
            htmlFor="colours"
          >
            Colour palette
          </label>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a signature shade. We will colour-match the final materials with you.
          </p>
        </div>
        <span
          aria-hidden="true"
          className="hidden size-14 shrink-0 border-4 border-card shadow-[0_3px_14px_oklch(0.26_0.02_55/0.15)] sm:block"
          style={{ background: selectedSwatch ?? "oklch(0.94 0.014 80)" }}
        />
      </div>

      <Select value={choice} onValueChange={chooseColour}>
        <SelectTrigger
          id="colours"
          className="mt-2 h-auto min-h-[46px] rounded-none border-border bg-card px-4 py-3 shadow-none focus:border-gold focus:ring-0"
        >
          <span className="flex min-w-0 items-center gap-3 text-left">
            <span
              aria-hidden="true"
              className="size-8 shrink-0 rounded-full border border-espresso/10 shadow-inner"
              style={{ background: selectedSwatch ?? "oklch(0.94 0.014 80)" }}
            />
            <span className="min-w-0">
              <SelectValue placeholder="Choose a signature shade">
                {choice || "Choose a signature shade"}
              </SelectValue>
              <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                {selected?.description ??
                  (choice === customOption
                    ? "Tell us the exact shade you have in mind"
                    : "View our bridal palette")}
              </span>
            </span>
          </span>
        </SelectTrigger>
        <SelectContent
          position="popper"
          sideOffset={6}
          className="rounded-none border-border bg-card p-1 shadow-xl"
        >
          {colourOptions.map((option) => (
            <SelectItem key={option.name} value={option.name} className="rounded-none py-2.5">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="size-7 shrink-0 rounded-full border border-espresso/10 shadow-inner"
                  style={{ background: option.swatch }}
                />
                <span>
                  <span className="block text-sm text-espresso">{option.name}</span>
                  <span className="block text-xs text-muted-foreground">{option.description}</span>
                </span>
              </span>
            </SelectItem>
          ))}
          <SelectItem value={customOption} className="rounded-none py-2.5">
            <span className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="size-7 shrink-0 rounded-full border border-espresso/10"
                style={{ background: bespokeSwatch }}
              />
              <span>
                <span className="block text-sm text-espresso">{customOption}</span>
                <span className="block text-xs text-muted-foreground">Request any other shade</span>
              </span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>

      <div className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-11" aria-label="Available colours">
        {colourOptions.map((option) => (
          <button
            key={option.name}
            type="button"
            title={option.name}
            aria-label={`Choose ${option.name}`}
            aria-pressed={choice === option.name}
            onClick={() => chooseColour(option.name)}
            className="aspect-square rounded-full border-2 border-card shadow-[0_0_0_1px_oklch(0.89_0.017_80)] transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 aria-pressed:scale-110 aria-pressed:shadow-[0_0_0_2px_oklch(0.66_0.084_82)]"
            style={{ background: option.swatch }}
          />
        ))}
      </div>

      {choice === customOption && (
        <div className="mt-5 border-t border-gold/20 pt-5">
          <label
            className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
            htmlFor="customColour"
          >
            Describe your custom colour
          </label>
          <input
            id="customColour"
            required
            placeholder="e.g. Burnished copper, lilac mist…"
            className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm text-espresso outline-none focus:border-gold"
            value={customColour}
            onChange={(event) => {
              setCustomColour(event.target.value);
              onChange(event.target.value);
            }}
          />
        </div>
      )}
    </section>
  );
}
