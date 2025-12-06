// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MbappeVsHalaand is ReentrancyGuard {
    address public vault;
    address public USDT;
    address public USDC;
    uint256 public totalMbappeStake;
    uint256 public totalHalaandStake;

    mapping(string => mapping(address => uint256)) public stakesBytoken;
    mapping(address => mapping(string => uint256)) public stakes;

    mapping(address => uint256) public balance;
    mapping(address => mapping(address => uint256)) public tokenBalance;

    constructor(address _vault, address _usdt, address _usdc) {
        vault = _vault;
        USDT = _usdt;
        USDC = _usdc;
    }

    function Halaand(uint256 amount, address token) external nonReentrant {
        require(token == USDT || token == USDC, "Invalid token");
        address sender = msg.sender;
        IERC20(token).transferFrom(sender, address(vault), amount);
        stakesBytoken["Halaand"][token] += amount;
        stakes[sender]["Halaand"] += amount;
        totalHalaandStake += amount;
    }

    function Mbappe(uint256 amount, address token) external nonReentrant {
        require(token == USDT || token == USDC, "Invalid token");
        address sender = msg.sender;

        IERC20(token).transferFrom(sender, address(vault), amount);       
        stakesBytoken["Mbappe"][token] += amount;
        stakes[sender]["Mbappe"] += amount;
        totalMbappeStake += amount;
    }

    function getStake(address user, string memory player) external view returns (uint256) {
        return stakes[user][player];
    }

    function getStakeByToken(string memory player, address token) external view returns (uint256) {
        return stakesBytoken[player][token];
    }

  receive() external payable {}
}
