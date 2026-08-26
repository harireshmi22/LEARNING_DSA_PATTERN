/**
 * @param {number[]} costs
 * @param {number[]} capacity
 * @param {number} budget
 * @return {number}
 */

var maxCapacity = function(costs, capacity, budget) {
    const n = costs.length;
    let answer = 0;

    // Single Machine Check
    for (let i = 0; i < n; i++) {
        if (costs[i] < budget) {
            answer = Math.max(answer, capacity[i]);
        }
    }

    // Group max capacity by unique cost
    // Map cost -> array of capacities (sorted descending)
    const costMap = new Map();
    for (let i = 0; i < n; i++) {
        if (!costMap.has(costs[i])) {
            costMap.set(costs[i], []);
        }
        costMap.get(costs[i]).push(capacity[i]);
    }

    const uniqueCosts = [];
    for (let [cost, caps] of costMap.entries()) {
        caps.sort((a, b) => b - a); // Sort capacities descending
        uniqueCosts.push(cost);

        // Same cost wali 2 machines pair ho sakti hain agar 2 * cost < budget
        if (caps.length >= 2 && 2 * cost < budget) {
            answer = Math.max(answer, caps[0] + caps[1]);
        }
    }

    uniqueCosts.sort((a, b) => a - b);
    const uLen = uniqueCosts.length;

    // prefMaxForUnique[i] = max capacity for machine with cost uniqueCosts[i]
    const maxCapForCost = uniqueCosts.map(c => costMap.get(c)[0]);
    const prefMax = new Array(uLen);
    prefMax[0] = maxCapForCost[0];
    for (let i = 1; i < uLen; i++) {
        prefMax[i] = Math.max(prefMax[i - 1], maxCapForCost[i]);
    }

    // Pair different costs
    for (let i = 1; i < uLen; i++) {
        const c2 = uniqueCosts[i];
        const cap2 = maxCapForCost[i];
        const target = budget - c2 - 1;

        if (target < uniqueCosts[0]) continue;

        let l = 0, r = i - 1, bestIdx = -1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (uniqueCosts[mid] <= target) {
                bestIdx = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        if (bestIdx !== -1) {
            answer = Math.max(answer, cap2 + prefMax[bestIdx]);
        }
    }

    return answer;
};