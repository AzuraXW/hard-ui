import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount  @vue/test-utils", () => {
    const button = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    expect(button.text()).toBe("Button");
  });

  test("测试red按钮", () => {
    const button = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });
    expect(
      button
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
