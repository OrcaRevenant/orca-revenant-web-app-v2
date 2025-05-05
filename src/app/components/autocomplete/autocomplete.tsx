"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import IconSelector from "../icon-selector";
import Input from "../input";
import { InputProps } from "../input/input";

export type AutocompleteOption = {
  label: string;
  value: string;
};

export type AutocompleteProps = {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: AutocompleteOption) => void;
  className?: string;
  inputProps?: InputProps;
};

export default function Autocomplete({
  options,
  value = "",
  onChange,
  onSelect,
  className,
  inputProps,
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(inputProps?.value || "");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = useMemo(() => {
    const searchTerm = inputValue.toString().toLowerCase().trim();

    // If input is empty, return all options
    if (!searchTerm) {
      return options;
    }

    const searchWords = searchTerm.split(/\s+/);
    return options.filter((option) => {
      const optionLabel = option.label.toLowerCase();
      return searchWords.every(
        (word) => word.length > 0 && optionLabel.includes(word)
      );
    });
  }, [options, inputValue]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      onChange?.(value);
      setIsOpen(true);
      setHighlightedIndex(-1);
    },
    [onChange]
  );

  const handleSelect = useCallback(
    (option: AutocompleteOption) => {
      setInputValue(option.label);
      onChange?.(option.label);
      onSelect?.(option);
      setIsOpen(false);
      inputRef.current?.focus();
    },
    [onChange, onSelect]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          inputRef.current?.focus();
          break;
        case "Tab":
          setIsOpen(false);
          break;
      }
    },
    [isOpen, filteredOptions, highlightedIndex, handleSelect]
  );

  const handleBlur = useCallback(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Reset highlighted index when filtered options change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [filteredOptions]);

  return (
    <div className={cn("relative", className)}>
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        onClick={() => setIsOpen(true)}
        onBlur={handleBlur}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="autocomplete-list"
        aria-autocomplete="list"
        aria-activedescendant={
          highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined
        }
        startAdornment={<IconSelector icon="SearchLg" className="size-5" />}
        endAdornment={<IconSelector icon="ChevronDown" className="size-5" />}
        inputClassName={cn(
          inputProps?.className,
          isOpen && "border border-border-brand"
        )}
        {...inputProps}
      />
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <div className="w-full" />
        </DropdownMenuTrigger>
        {filteredOptions.length > 0 && (
          <DropdownMenuContent
            ref={dropdownRef}
            className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-[300px] overflow-auto"
            align="start"
            sideOffset={4}
            forceMount
            id="autocomplete-list"
            role="listbox"
          >
            {filteredOptions.map((option, index) => (
              <DropdownMenuItem
                key={option.value}
                className={cn(
                  "cursor-pointer",
                  highlightedIndex === index && "bg-bg-secondary"
                )}
                onSelect={() => handleSelect(option)}
                role="option"
                id={`option-${index}`}
                aria-selected={highlightedIndex === index}
              >
                <div className="w-full flex justify-between">
                  {option.label}
                  {inputValue === option.value && (
                    <IconSelector icon="Check" className="size-5" />
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
